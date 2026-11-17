<script setup lang="ts">
// 设计稿节点 38:9 Logo（多色图标，保留原色）
withDefaults(defineProps<{ size?: number }>(), { size: 40 })
</script>

<template>
  <svg
    class="brand-logo"
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="hg-logo-gradient"
        gradientTransform="matrix(17.6471 29.4118 -29.4118 17.6471 5.88235 -3.52941)"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop offset="0" stop-color="#FF7A44" />
        <stop offset="0.55" stop-color="#FF3D5B" />
        <stop offset="1" stop-color="#E21959" />
      </linearGradient>
    </defs>
    <rect fill="url(#hg-logo-gradient)" width="40" height="40" rx="10" ry="10" />
    <path
      fill="#FFF"
      transform="matrix(1 0 0 1 9.72854 12.2713)"
      d="M10.2715 1.2671C7.5022 -1.0406 1.0407 -0.579 0.1176 5.8825C-0.8055 12.3441 3.8099 19.2671 10.2715 19.2671C15.2376 19.2671 19.1145 15.1733 20.2222 10.3456C19.1879 9.5615 18.6411 8.5211 18.582 7.2245C18.5229 5.9279 18.9727 4.8421 19.9315 3.9671C18.1268 -0.6483 12.7361 -0.7867 10.2715 1.2671Z"
    />
    <path
      fill="#FF3D5C"
      transform="matrix(1 0 0 1 18.6154 20.4615)"
      d="M0 0L0 4.6154L3.7846 2.3077L0 0Z"
    />
    <path
      fill="#5BE08A"
      transform="matrix(1 0 0 1 20.3406 8.83077)"
      d="M0.0287 4.3385C-0.2483 2.0308 1.5056 0.1846 4.2748 0C4.4594 2.4 2.7056 4.1538 0.0287 4.3385Z"
    />
  </svg>
</template>

<style scoped>
.brand-logo {
  flex-shrink: 0;
}
</style>
