<script setup lang="ts">
// 设计稿节点 38:5 Features
import SectionHeading from './SectionHeading.vue'
import FeatureIcon, { type FeatureIconName } from './FeatureIcon.vue'

const features: { icon: FeatureIconName; title: string; desc: string }[] = [
  {
    icon: 'screen',
    title: '大屏沉浸播放',
    desc: '竖屏、横屏剧集都能完整呈现，支持全屏、倍速与清晰度切换，选集与切集都用快捷键搞定。',
  },
  {
    icon: 'trophy',
    title: '热播榜一键直达',
    desc: '本周热度榜、分类榜实时更新，真人剧、漫剧、AI 剧按题材筛选，找剧不再翻半天。',
  },
  {
    icon: 'clock',
    title: '自动续播进度',
    desc: '看到第几集、剩余多少都帮你记着，首页「继续观看」一点就接着追。',
  },
  {
    icon: 'lock',
    title: '无需注册登录',
    desc: '打开即用，观看历史和追剧记录只存在你自己的电脑里，不上传、不打扰。',
  },
]
</script>

<template>
  <section id="features" class="features" aria-labelledby="features-title">
    <SectionHeading
      title-id="features-title"
      eyebrow="功能特性"
      title="为桌面观剧而生"
      sub="不用打开手机，把刷剧、找剧、追剧都搞定在一个大屏窗口里"
    />

    <ul class="grid">
      <li v-for="item in features" :key="item.title" class="card">
        <span class="icon-box">
          <FeatureIcon :name="item.icon" />
        </span>
        <h3 class="title">{{ item.title }}</h3>
        <p class="desc">{{ item.desc }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding: 112px var(--hg-page-padding);
  background: var(--hg-bg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: var(--hg-content-max);
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 236px;
  padding: 28px;
  border: 1px solid rgb(255 255 255 / 0.06);
  border-radius: 20px;
  background: var(--hg-surface);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.card:hover {
  border-color: rgb(255 46 84 / 0.3);
  transform: translateY(-4px);
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--hg-grad-start) 0%, var(--hg-grad-end) 100%);
  color: #ffffff;
}

.title {
  color: var(--hg-text);
  font-size: 20px;
  font-weight: 700;
}

.desc {
  color: var(--hg-text-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card {
    min-height: 0;
  }
}

@media (max-width: 900px) {
  .features {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
