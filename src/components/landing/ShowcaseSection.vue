<script setup lang="ts">
// 设计稿节点 38:4 Showcase
import SectionHeading from './SectionHeading.vue'
import shotDetail from '@/assets/images/shot-detail.webp'
import shotPlayer from '@/assets/images/shot-player.webp'
import shotRanking from '@/assets/images/shot-ranking.webp'

const items = [
  {
    index: '01',
    title: '剧集详情，一眼看懂',
    desc: '海报、简介、热度、选集都在同一页，追剧和直接开看一键完成。',
    image: shotDetail,
    alt: '剧集详情页界面',
    reverse: false,
  },
  {
    index: '02',
    title: '沉浸播放，选集不打断',
    desc: '竖屏剧集居中呈现，右侧选集抽屉随时呼出，切集、倍速、全屏都有快捷键。',
    image: shotPlayer,
    alt: '沉浸播放页界面',
    reverse: true,
  },
  {
    index: '03',
    title: '热度榜单，找剧不迷路',
    desc: '突出前三名的榜单排版，热度走势一目了然，点进去就能开看。',
    image: shotRanking,
    alt: '热播排行榜界面',
    reverse: false,
  },
]
</script>

<template>
  <section id="showcase" class="showcase" aria-labelledby="showcase-title">
    <SectionHeading
      title-id="showcase-title"
      eyebrow="界面一览"
      title="每一屏，都为大屏重新设计"
      sub="从找剧、选集到沉浸播放，一套深色界面贯穿始终"
    />

    <div class="rows">
      <article
        v-for="item in items"
        :key="item.index"
        class="row"
        :class="{ 'row--reverse': item.reverse }"
      >
        <div class="shot">
          <img :src="item.image" :alt="item.alt" width="640" height="400" loading="lazy" />
        </div>
        <div class="text">
          <span class="index">{{ item.index }}</span>
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding: 112px var(--hg-page-padding);
  background: var(--hg-bg-alt);
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 72px;
  width: 100%;
  max-width: 1100px;
}

.row {
  display: flex;
  align-items: center;
  gap: 56px;
}

/* 设计稿 02 行为「文字在左、截图在右」 */
.row--reverse {
  flex-direction: row-reverse;
}

.shot {
  flex: 0 1 640px;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgb(0 0 0 / 0.5);
}

.shot img {
  width: 100%;
  height: auto;
  aspect-ratio: 640 / 400;
  object-fit: cover;
}

.text {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.index {
  align-self: flex-start;
  background: linear-gradient(180deg, var(--hg-grad-start) 0%, var(--hg-grad-end) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: var(--hg-font-latin);
  font-size: 56px;
  font-weight: 900;
  line-height: 1.21;
}

.title {
  color: var(--hg-text);
  font-size: 28px;
  font-weight: 700;
}

.desc {
  color: var(--hg-text-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .showcase {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .row,
  .row--reverse {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
  }

  .shot {
    flex-basis: auto;
  }

  .index {
    font-size: 44px;
  }

  .title {
    font-size: 24px;
  }
}
</style>
