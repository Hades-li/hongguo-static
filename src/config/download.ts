// 下载配置：安装包来自 GitHub Releases（Hades-li/HongguoDesktop）
export type Platform = 'mac' | 'win'

export interface DownloadTarget {
  platform: Platform
  os: 'macOS' | 'Windows'
  info: string
  recommended?: boolean
}

export const RELEASE_REPO = 'Hades-li/HongguoDesktop'
export const RELEASE_REPO_URL = `https://github.com/${RELEASE_REPO}`
/** 最新 release 页面，作为获取失败时的兜底地址 */
export const RELEASES_LATEST_PAGE = `${RELEASE_REPO_URL}/releases/latest`
/** 最新 release 的资源直链前缀（electron-builder 的 latest*.yml 与安装包都在这里） */
export const RELEASE_LATEST_DOWNLOAD = `${RELEASE_REPO_URL}/releases/latest/download`

/**
 * 读取 latest*.yml 的基础地址。
 * - 开发环境：走 vite.config.ts 中的 /__release 代理（github.com 的下载地址不带 CORS 头，浏览器无法直接读取）
 * - 生产环境：默认直连 GitHub；若部署了同源代理，可通过 VITE_RELEASE_YML_BASE 指定
 * 直连被 CORS 拦截时会自动降级为 GitHub API（见 src/services/release.ts）
 */
export const RELEASE_YML_BASE: string =
  import.meta.env.VITE_RELEASE_YML_BASE ||
  (import.meta.env.DEV ? '/__release' : RELEASE_LATEST_DOWNLOAD)

/** 各平台对应的 electron-builder 更新描述文件，以及优先选择的安装包后缀 */
export const PLATFORM_RELEASE: Record<Platform, { yml: string; preferExt: string[] }> = {
  mac: { yml: 'latest-mac.yml', preferExt: ['.dmg', '.zip'] },
  win: { yml: 'latest.yml', preferExt: ['.exe', '.msi'] },
}

export const downloads: Record<Platform, DownloadTarget> = {
  mac: {
    platform: 'mac',
    os: 'macOS',
    info: 'Apple 芯片 (M1 及以上)  ·  macOS 12 及以上',
    recommended: true,
  },
  win: {
    platform: 'win',
    os: 'Windows',
    info: 'x64  ·  Windows 10 及以上',
  },
}

export const footerLinks = [
  { label: 'GitHub', url: RELEASE_REPO_URL, latin: true },
  { label: '更新日志', url: `${RELEASE_REPO_URL}/releases` },
  { label: '问题反馈', url: `${RELEASE_REPO_URL}/issues` },
]
