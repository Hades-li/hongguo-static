/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 可选：latest*.yml 的同源代理地址（如 /release），未设置时生产环境直连 GitHub */
  readonly VITE_RELEASE_YML_BASE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
