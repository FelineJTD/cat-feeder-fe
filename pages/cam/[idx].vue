<script setup>
  import { onMounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appName = 'Liat Kucing Maem'
  const numOfCams = 2

  const currCam = parseInt(route.params.idx)
</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-screen w-full">
      <h1 class="text-3xl font-bold text-white">{{ $route.params.idx }}</h1>
      <NuxtLink to="/test" class="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md">Liat Kucing</NuxtLink>
      <!-- RIGHT DECOR -->
      <div class="absolute right-32 top-0 border-r-2 hidden lg:block h-1/3" />
    </div>
  </div>
</template>
