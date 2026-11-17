<script setup lang="ts">
// 设计稿节点 38:7 Footer
import { footerLinks } from '@/config/download'
</script>

<template>
  <footer class="footer">
    <div class="top">
      <div class="brand">
        <p class="name">红果短剧 · 桌面版</p>
        <p class="tagline">在大屏上，追一部好剧</p>
      </div>
      <nav class="links" aria-label="页脚链接">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          class="link"
          :class="{ 'link--latin': link.latin }"
          :href="link.url"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>

    <div class="divider" role="presentation" />

    <p class="copyright">
      本应用为个人项目，内容版权归各内容方所有&nbsp;&nbsp;·&nbsp;&nbsp;2026 HongguoDesktop
    </p>

    <p class="wordmark" aria-hidden="true">HONGGUO</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 72px var(--hg-page-padding) 0;
  background: var(--hg-bg);
  overflow: hidden;
}

.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  color: var(--hg-text);
  font-size: 18px;
  font-weight: 700;
}

.tagline {
  color: var(--hg-text-tertiary);
  font-size: 14px;
  font-weight: 400;
}

.links {
  display: flex;
  gap: 32px;
}

.link {
  color: var(--hg-text-nav);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.link--latin {
  font-family: var(--hg-font-latin);
}

.link:hover {
  color: var(--hg-text);
}

.divider {
  height: 1px;
  background: var(--hg-divider);
}

.copyright {
  color: var(--hg-text-muted);
  font-size: 13px;
  font-weight: 400;
  white-space: pre-wrap;
}

.wordmark {
  background: linear-gradient(180deg, rgb(255 46 84 / 0.55) 0%, rgb(255 107 61 / 0) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: var(--hg-font-latin);
  /* 1440 宽设计稿为 200px，窄屏等比收缩 */
  font-size: clamp(64px, 13.9vw, 200px);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.21;
  text-align: center;
  user-select: none;
}
</style>
