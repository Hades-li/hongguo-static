<script setup lang="ts">
// 设计稿节点 38:3 Hero
import heroShot from '@/assets/images/hero-home.webp'
import { downloads } from '@/config/download'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="badge">
      <span class="dot" aria-hidden="true" />
      <span class="badge-text">全新发布</span>
    </div>

    <h1 id="hero-title" class="headline">把红果短剧，装进你的桌面</h1>

    <p class="subline">
      大屏沉浸观剧，热播榜与分类一键直达，进度自动续播。原生桌面体验，支持 macOS 与 Windows。
    </p>

    <div class="ctas">
      <a class="btn btn-primary" :href="downloads.mac.url">下载 macOS 版</a>
      <a class="btn btn-secondary" :href="downloads.win.url">下载 Windows 版</a>
    </div>

    <p class="meta">
      macOS (Apple 芯片)&nbsp;&nbsp;·&nbsp;&nbsp;Windows 10 及以上&nbsp;&nbsp;·&nbsp;&nbsp;同时提供
      Linux 安装包
    </p>

    <div class="stage">
      <div class="app-window">
        <img
          class="shot"
          :src="heroShot"
          width="1100"
          height="688"
          alt="红果短剧桌面版首页界面"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 48px var(--hg-page-padding);
  background: var(--hg-bg);
  /* 设计稿 Hero 无裁切，但 AppWindow 的大半径发光阴影在窄屏会撑出横向滚动 */
  overflow-x: clip;
}

.badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border: 1px solid rgb(255 46 84 / 0.4);
  border-radius: 999px;
  background: var(--hg-surface-raised);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: var(--hg-brand);
}

.badge-text {
  color: var(--hg-brand-text);
  font-size: 13px;
  font-weight: 500;
}

.headline {
  color: var(--hg-text);
  /* 1440 宽设计稿为 76px，窄屏等比收缩 */
  font-size: clamp(36px, 5.28vw, 76px);
  font-weight: 900;
  text-align: center;
}

.subline {
  max-width: 720px;
  color: var(--hg-text-secondary);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 999px;
  color: var(--hg-text);
  font-size: 17px;
  font-weight: 700;
  transition:
    filter 0.2s ease,
    transform 0.2s ease,
    background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--hg-gradient);
  box-shadow: 0 8px 24px rgb(255 46 84 / 0.45);
}

.btn-primary:hover {
  filter: brightness(1.08);
}

.btn-secondary {
  border: 1px solid rgb(255 255 255 / 0.12);
  background: var(--hg-btn-secondary);
}

.btn-secondary:hover {
  background: #2e2e38;
}

.meta {
  color: var(--hg-text-meta);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding-top: 56px;
}

.app-window {
  width: 100%;
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 0.1);
  border-bottom: 0;
  border-radius: 16px 16px 0 0;
  background: var(--hg-bg);
  box-shadow:
    0 -10px 120px rgb(255 46 84 / 0.28),
    0 20px 60px rgb(0 0 0 / 0.6);
}

.shot {
  width: 100%;
  height: auto;
  aspect-ratio: 1100 / 688;
  object-fit: cover;
}

@media (max-width: 640px) {
  .subline {
    font-size: 16px;
  }

  .btn {
    padding: 14px 24px;
    font-size: 15px;
  }

  .stage {
    padding-top: 24px;
  }
}
</style>
