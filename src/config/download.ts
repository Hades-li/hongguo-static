// 下载地址配置：发布安装包后把 url 替换为真实地址（如 GitHub Releases 链接）
export interface DownloadTarget {
  os: 'macOS' | 'Windows'
  info: string
  url: string
  recommended?: boolean
}

export const downloads: Record<'mac' | 'win', DownloadTarget> = {
  mac: {
    os: 'macOS',
    info: 'Apple 芯片 (M1 及以上)  ·  macOS 12 及以上',
    url: '#download',
    recommended: true,
  },
  win: {
    os: 'Windows',
    info: 'x64  ·  Windows 10 及以上',
    url: '#download',
  },
}

export const footerLinks = [
  { label: 'GitHub', url: '#', latin: true },
  { label: '更新日志', url: '#' },
  { label: '问题反馈', url: '#' },
]
