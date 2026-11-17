<script setup lang="ts">
// 下载落地页：ardot 745901515002612 · 节点 38:1
import SiteHeader from '@/components/landing/SiteHeader.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import ShowcaseSection from '@/components/landing/ShowcaseSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import DownloadSection from '@/components/landing/DownloadSection.vue'
import SiteFooter from '@/components/landing/SiteFooter.vue'
</script>

<template>
  <div id="top" class="landing">
    <SiteHeader />
    <main>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <DownloadSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
  background: var(--hg-bg);
}
</style>
