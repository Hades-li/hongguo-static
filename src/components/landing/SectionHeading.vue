<script setup lang="ts">
// 各分区通用标题组：Eyebrow(14 Bold #ff5c7a) / Title(44 Black) / Sub(18 Regular #a8a8b2)
defineProps<{
  eyebrow: string
  title: string
  sub: string
  titleId?: string
}>()
</script>

<template>
  <p class="eyebrow">{{ eyebrow }}</p>
  <h2 :id="titleId" class="title">{{ title }}</h2>
  <p class="sub">{{ sub }}</p>
</template>

<style scoped>
.eyebrow {
  color: var(--hg-brand-text);
  font-size: 14px;
  font-weight: 700;
}

.title {
  color: var(--hg-text);
  font-size: 44px;
  font-weight: 900;
  text-align: center;
}

.sub {
  color: var(--hg-text-secondary);
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}

@media (max-width: 640px) {
  .title {
    font-size: 32px;
  }

  .sub {
    font-size: 16px;
  }
}
</style>
