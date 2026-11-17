<script setup lang="ts">
// 设计稿节点 38:63 / 38:71 / 38:81 / 38:88 导出的 24×24 单色图标，颜色改为 currentColor
export type FeatureIconName = 'screen' | 'trophy' | 'clock' | 'lock'

defineProps<{ name: FeatureIconName }>()
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <template v-if="name === 'screen'">
      <rect
        stroke="currentColor"
        stroke-width="2"
        transform="matrix(1 0 0 1 3 4)"
        width="18"
        height="13"
        rx="2"
        ry="2"
      />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 9 20)"
        d="M0 -1L6 -1Q6.4192 -1.0121 6.7071 -0.7071Q7.0121 -0.4192 7 0Q7.0121 0.4192 6.7071 0.7071Q6.4192 1.0121 6 1L0 1Q-0.4192 1.0121 -0.7071 0.7071Q-1.0121 0.4192 -1 0Q-1.0121 -0.4192 -0.7071 -0.7071Q-0.4192 -1.0121 0 -1Z"
      />
      <path fill="currentColor" transform="matrix(1 0 0 1 10.5 8.5)" d="M0 0L3.5 2L0 4L0 0Z" />
    </template>

    <template v-else-if="name === 'trophy'">
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 8 21)"
        d="M0 -1L8 -1Q8.4192 -1.0121 8.7071 -0.7071Q9.0121 -0.4192 9 0Q9.0121 0.4192 8.7071 0.7071Q8.4192 1.0121 8 1L0 1Q-0.4192 1.0121 -0.7071 0.7071Q-1.0121 0.4192 -1 0Q-1.0121 -0.4192 -0.7071 -0.7071Q-0.4192 -1.0121 0 -1Z"
      />
      <rect fill="currentColor" transform="matrix(1 0 0 1 12 17)" x="-1" width="2" height="4" />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 7 4)"
        d="M10 -1Q10.4192 -1.0121 10.7071 -0.7071Q11.0121 -0.4192 11 0L11 6Q11 8.4842 9.2421 10.2421Q7.4842 12 5 12Q2.5158 12 0.7579 10.2421Q-1 8.4842 -1 6L-1 0Q-1.0121 -0.4192 -0.7071 -0.7071Q-0.4192 -1.0121 0 -1L10 -1ZM1 1L1 6Q1 7.6558 2.1721 8.8279Q3.3442 10 5 10Q6.6558 10 7.8279 8.8279Q9 7.6558 9 6L9 1L1 1Z"
      />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 4 6)"
        d="M3 1L1 1L1 2Q1 2.4108 1.2946 2.7054Q1.5892 3 2 3L3 3L3 5L2 5Q0.7608 5 -0.1196 4.1196Q-1 3.2392 -1 2L-1 -1L3 -1L3 1Z"
      />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 17 6)"
        d="M0 -1L4 -1L4 2Q4 3.2392 3.1196 4.1196Q2.2392 5 1 5L0 5L0 3L1 3Q1.4108 3 1.7054 2.7054Q2 2.4108 2 2L2 1L0 1L0 -1Z"
      />
    </template>

    <template v-else-if="name === 'clock'">
      <circle
        stroke="currentColor"
        stroke-width="2"
        transform="matrix(1 0 0 1 3 3)"
        cx="9"
        cy="9"
        r="9"
      />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 12 7)"
        d="M1 0L1 4.4197L3.9961 6.1318Q4.3661 6.3293 4.4648 6.7369Q4.5867 7.1381 4.3682 7.4961Q4.1707 7.8661 3.7631 7.9648Q3.3619 8.0867 3.0039 7.8682L-0.4961 5.8682Q-0.7316 5.7365 -0.8649 5.5019Q-1.0024 5.2698 -1 5L-1 0Q-1.0121 -0.4192 -0.7071 -0.7071Q-0.4192 -1.0121 0 -1Q0.4192 -1.0121 0.7071 -0.7071Q1.0121 -0.4192 1 0Z"
      />
    </template>

    <template v-else>
      <rect
        stroke="currentColor"
        stroke-width="2"
        transform="matrix(1 0 0 1 4 11)"
        width="16"
        height="10"
        rx="2"
        ry="2"
      />
      <path
        fill="currentColor"
        transform="matrix(1 0 0 1 8 3)"
        d="M-1 8L-1 4Q-1 1.9283 0.4641 0.4641Q1.9283 -1 4 -1Q6.0717 -1 7.5359 0.4641Q9 1.9283 9 4L9 8Q9.0121 8.4192 8.7071 8.7071Q8.4192 9.0121 8 9Q7.5808 9.0121 7.2929 8.7071Q6.9879 8.4192 7 8L7 4Q7 2.7567 6.1216 1.8784Q5.2433 1 4 1Q2.7567 1 1.8784 1.8784Q1 2.7567 1 4L1 8Q1.0121 8.4192 0.7071 8.7071Q0.4192 9.0121 0 9Q-0.4192 9.0121 -0.7071 8.7071Q-1.0121 8.4192 -1 8Z"
      />
    </template>
  </svg>
</template>
