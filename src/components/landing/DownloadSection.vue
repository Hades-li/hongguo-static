<script setup lang="ts">
// 设计稿节点 38:6 Download
import SectionHeading from './SectionHeading.vue'
import { downloads } from '@/config/download'

const cards = [downloads.mac, downloads.win]
</script>

<template>
  <section id="download" class="download" aria-labelledby="download-title">
    <SectionHeading
      title-id="download-title"
      eyebrow="下载安装"
      title="选择你的系统，马上开看"
      sub="完全免费，内置自动更新"
    />

    <div class="cards">
      <article
        v-for="card in cards"
        :key="card.os"
        class="card"
        :class="{ 'card--recommended': card.recommended }"
      >
        <!-- Windows 卡片在设计稿中用 24px TagSpacer 占位，与推荐标签对齐 -->
        <span v-if="card.recommended" class="tag">推荐</span>
        <span v-else class="tag-spacer" aria-hidden="true" />
        <h3 class="os">{{ card.os }}</h3>
        <p class="info">{{ card.info }}</p>
        <a
          class="btn"
          :class="card.recommended ? 'btn-primary' : 'btn-secondary'"
          :href="card.url"
          :aria-label="`下载 ${card.os} 版`"
        >
          下载
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 112px var(--hg-page-padding);
  background: var(--hg-bg-alt);
}

.cards {
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 880px;
}

.card {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-width: 0;
  padding: 36px;
  border: 1px solid rgb(255 255 255 / 0.08);
  border-radius: 24px;
  background: var(--hg-surface);
}

.card--recommended {
  border-color: rgb(255 46 84 / 0.5);
  background: linear-gradient(163deg, #33141f 0%, #1a1a21 60%);
  box-shadow: 0 12px 40px rgb(255 46 84 / 0.2);
}

.tag {
  padding: 4px 10px;
  border-radius: 6px;
  background: var(--hg-brand);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  /* 固定行高 16px，使标签总高 24px 与 TagSpacer 对齐 */
  line-height: 16px;
}

.tag-spacer {
  width: 10px;
  height: 24px;
}

.os {
  color: var(--hg-text);
  font-family: var(--hg-font-latin);
  font-size: 32px;
  font-weight: 700;
}

.info {
  align-self: stretch;
  color: var(--hg-text-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  white-space: pre-wrap;
}

.btn {
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 15px 28px;
  border-radius: 999px;
  color: #ffffff;
  font-size: 16px;
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
  border: 1px solid rgb(255 255 255 / 0.15);
  background: var(--hg-btn-secondary);
}

.btn-secondary:hover {
  background: #2e2e38;
}

@media (max-width: 900px) {
  .download {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 640px) {
  .cards {
    flex-direction: column;
  }

  .card {
    padding: 28px;
  }
}
</style>
