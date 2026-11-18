import { parse } from 'yaml'
import {
  PLATFORM_RELEASE,
  RELEASE_LATEST_DOWNLOAD,
  RELEASE_REPO,
  RELEASE_YML_BASE,
  type Platform,
} from '@/config/download'

export interface InstallerInfo {
  version: string
  fileName: string
  url: string
  size?: number
  releaseDate?: string
  /** 数据来源：yml = latest*.yml，api = GitHub API 兜底 */
  source: 'yml' | 'api'
}

/** electron-builder 生成的 latest.yml / latest-mac.yml 结构 */
interface UpdateYml {
  version?: string
  files?: { url?: string; size?: number }[]
  path?: string
  releaseDate?: string
}

interface GithubRelease {
  tag_name: string
  published_at?: string
  assets: { name: string; size: number; browser_download_url: string }[]
}

const REQUEST_TIMEOUT = 10_000

async function fetchWithTimeout(input: string, init?: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
  try {
    const res = await fetch(input, { ...init, signal: controller.signal, cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status} ${input}`)
    return res
  } finally {
    clearTimeout(timer)
  }
}

/** 按优先后缀挑选安装包，例如 macOS 优先 .dmg、Windows 优先 .exe */
function pickByExt<T>(items: T[], getName: (item: T) => string, preferExt: string[]) {
  for (const ext of preferExt) {
    const hit = items.find((item) => getName(item).toLowerCase().endsWith(ext))
    if (hit) return hit
  }
  return undefined
}

/** 首选：读取 latest*.yml，从 files 中取出安装包 */
async function fromUpdateYml(platform: Platform): Promise<InstallerInfo> {
  const { yml, preferExt } = PLATFORM_RELEASE[platform]
  const text = await (await fetchWithTimeout(`${RELEASE_YML_BASE}/${yml}`)).text()
  const data = parse(text) as UpdateYml | null

  const version = data?.version
  const files = (data?.files ?? []).filter((f): f is { url: string; size?: number } => !!f.url)
  const file =
    pickByExt(files, (f) => f.url, preferExt) ?? (data?.path ? { url: data.path } : undefined)
  if (!version || !file) throw new Error(`${yml} 中缺少 version 或安装包信息`)

  return {
    version,
    fileName: file.url,
    // yml 来自 latest release，安装包与其同在 latest 下
    url: `${RELEASE_LATEST_DOWNLOAD}/${encodeURIComponent(file.url)}`,
    size: file.size,
    releaseDate: data?.releaseDate,
    source: 'yml',
  }
}

/** 兜底：GitHub API 支持 CORS，在无法读取 yml（如未部署同源代理）时使用 */
async function fromGithubApi(platform: Platform): Promise<InstallerInfo> {
  const res = await fetchWithTimeout(
    `https://api.github.com/repos/${RELEASE_REPO}/releases/latest`,
    {
      headers: { Accept: 'application/vnd.github+json' },
    },
  )
  const release = (await res.json()) as GithubRelease
  const asset = pickByExt(release.assets, (a) => a.name, PLATFORM_RELEASE[platform].preferExt)
  if (!asset) throw new Error(`最新版本 ${release.tag_name} 中没有找到 ${platform} 安装包`)

  return {
    version: release.tag_name.replace(/^v/i, ''),
    fileName: asset.name,
    url: asset.browser_download_url,
    size: asset.size,
    releaseDate: release.published_at,
    source: 'api',
  }
}

/** 获取指定平台的最新安装包：先读 yml，失败再走 GitHub API */
export async function getLatestInstaller(platform: Platform): Promise<InstallerInfo> {
  try {
    return await fromUpdateYml(platform)
  } catch (ymlError) {
    console.warn('[release] 读取 latest yml 失败，改用 GitHub API', ymlError)
    return fromGithubApi(platform)
  }
}

export function formatSize(bytes?: number): string {
  if (!bytes) return ''
  return `${(bytes / 1024 / 1024).toFixed(0)} MB`
}
