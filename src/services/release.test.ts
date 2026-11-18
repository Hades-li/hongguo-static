import { afterEach, describe, expect, it, vi } from 'vite-plus/test'
import { formatSize, getLatestInstaller } from './release'

const MAC_YML = `version: 0.3.1
files:
  - url: HongguoDesktop-0.3.1-arm64-mac.zip
    sha512: abc
    size: 144399844
  - url: HongguoDesktop-0.3.1.dmg
    sha512: def
    size: 149670843
path: HongguoDesktop-0.3.1-arm64-mac.zip
releaseDate: '2026-11-18T03:15:52.797Z'
`

const WIN_YML = `version: 0.3.1
files:
  - url: HongguoDesktop-Setup-0.3.1.exe
    sha512: ghi
    size: 133843630
path: HongguoDesktop-Setup-0.3.1.exe
releaseDate: '2026-11-18T03:17:33.517Z'
`

const API_RELEASE = {
  tag_name: 'v0.3.2',
  published_at: '2026-11-19T00:00:00Z',
  assets: [
    { name: 'latest.yml', size: 1, browser_download_url: 'https://x/latest.yml' },
    { name: 'HongguoDesktop-0.3.2.dmg', size: 2, browser_download_url: 'https://x/a.dmg' },
    { name: 'HongguoDesktop-Setup-0.3.2.exe', size: 3, browser_download_url: 'https://x/a.exe' },
  ],
}

function mockFetch(handler: (url: string) => Response | Promise<Response>) {
  const fn = vi.fn((input: string | URL | Request) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
    return Promise.resolve(handler(url))
  })
  vi.stubGlobal('fetch', fn)
  return fn
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('getLatestInstaller', () => {
  it('macOS 读取 latest-mac.yml 并优先选择 dmg', async () => {
    const fetchMock = mockFetch(() => new Response(MAC_YML))
    const info = await getLatestInstaller('mac')

    expect(fetchMock.mock.calls[0]?.[0]).toMatch(/latest-mac\.yml$/)
    expect(info).toMatchObject({
      version: '0.3.1',
      fileName: 'HongguoDesktop-0.3.1.dmg',
      size: 149670843,
      source: 'yml',
    })
    expect(info.url).toBe(
      'https://github.com/Hades-li/HongguoDesktop/releases/latest/download/HongguoDesktop-0.3.1.dmg',
    )
  })

  it('Windows 读取 latest.yml 并选择 exe', async () => {
    const fetchMock = mockFetch(() => new Response(WIN_YML))
    const info = await getLatestInstaller('win')

    expect(fetchMock.mock.calls[0]?.[0]).toMatch(/\/latest\.yml$/)
    expect(info.fileName).toBe('HongguoDesktop-Setup-0.3.1.exe')
    expect(info.size).toBe(133843630)
  })

  it('yml 读取失败（如 CORS）时降级到 GitHub API', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    mockFetch((url) => {
      if (url.includes('api.github.com')) return Response.json(API_RELEASE)
      throw new TypeError('Failed to fetch')
    })

    const mac = await getLatestInstaller('mac')
    expect(mac).toMatchObject({ version: '0.3.2', url: 'https://x/a.dmg', source: 'api' })

    const win = await getLatestInstaller('win')
    expect(win).toMatchObject({ version: '0.3.2', url: 'https://x/a.exe', source: 'api' })
  })

  it('yml 内容缺少安装包时降级到 GitHub API', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    mockFetch((url) =>
      url.includes('api.github.com') ? Response.json(API_RELEASE) : new Response('version: 1.0.0'),
    )
    expect((await getLatestInstaller('win')).source).toBe('api')
  })

  it('两种方式都失败时抛出错误', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    mockFetch(() => new Response('not found', { status: 404 }))
    await expect(getLatestInstaller('mac')).rejects.toThrow()
  })
})

describe('formatSize', () => {
  it('转换为 MB', () => {
    expect(formatSize(149670843)).toBe('143 MB')
    expect(formatSize(undefined)).toBe('')
  })
})
