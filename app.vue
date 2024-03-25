<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s linear;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: blur(0.25rem);
  transform: scale(1.01);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>