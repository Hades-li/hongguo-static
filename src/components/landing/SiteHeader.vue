<script setup lang="ts">
// 设计稿节点 38:2 Header
import BrandLogo from './BrandLogo.vue'

const navItems = [
  { label: '界面一览', href: '#showcase' },
  { label: '功能特性', href: '#features' },
  { label: '下载安装', href: '#download' },
]
</script>

<template>
  <header class="header">
    <div class="inner">
      <a class="brand" href="#top" aria-label="红果短剧 首页">
        <BrandLogo />
        <span class="brand-name">红果短剧</span>
      </a>

      <nav class="nav" aria-label="主导航">
        <a v-for="item in navItems" :key="item.href" class="nav-link" :href="item.href">
          {{ item.label }}
        </a>
        <a class="nav-cta" href="#download">立即下载</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* 设计稿 Header 无填充；为滚动时可读性增加吸顶半透明背景（设计稿外的增强） */
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgb(14 14 18 / 0.82);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 var(--hg-page-padding);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-name {
  color: var(--hg-text);
  font-size: 18px;
  font-weight: 700;
}

.nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-link {
  color: var(--hg-text-nav);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--hg-text);
}

.nav-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 999px;
  background: var(--hg-gradient);
  color: var(--hg-text);
  font-size: 14px;
  font-weight: 700;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;
}

.nav-cta:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .inner {
    height: 64px;
  }

  .nav {
    gap: 20px;
  }

  .nav-link {
    display: none;
  }
}
</style>
