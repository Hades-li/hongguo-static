import { reactive } from 'vue'
import type { Platform } from '@/config/download'
import { getLatestInstaller, type InstallerInfo } from '@/services/release'

export type DownloadStatus = 'idle' | 'loading' | 'started' | 'error'

interface PlatformState {
  status: DownloadStatus
  installer?: InstallerInfo
  error?: string
}

// 模块级共享状态：Hero 与下载区的同平台按钮显示一致
const state = reactive<Record<Platform, PlatformState>>({
  mac: { status: 'idle' },
  win: { status: 'idle' },
})

/** 触发浏览器下载（GitHub 下载地址会以附件形式返回，页面不会跳走） */
function triggerDownload(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function useInstallerDownload() {
  /** 点击下载：每次都实时读取最新版本信息，再下载对应安装包 */
  async function download(platform: Platform) {
    const current = state[platform]
    if (current.status === 'loading') return

    current.status = 'loading'
    current.error = undefined
    try {
      const installer = await getLatestInstaller(platform)
      current.installer = installer
      current.status = 'started'
      triggerDownload(installer.url)
    } catch (error) {
      console.error('[download] 获取最新安装包失败', error)
      // 异步回调中 window.open 会被浏览器拦截，改由界面展示发布页链接
      current.status = 'error'
      current.error = '获取最新版本失败'
    }
  }

  return { state, download }
}
