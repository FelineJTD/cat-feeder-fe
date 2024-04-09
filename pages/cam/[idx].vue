<script setup>
  import { onMounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appName = 'Liat Kucing Maem'
  const numOfCams = 2

  const currCam = parseInt(route.params.idx)

  onBeforeMount(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }),

  onMounted(() => {
    window.onscroll = function(e) {
      if (this.oldScroll > this.scrollY) {
        navigateTo('/cam/' + ((currCam - 2 + numOfCams) % numOfCams + 1))
      } else {
        navigateTo('/cam/' + (currCam % numOfCams + 1))
      }
      this.oldScroll = this.scrollY;
    }
  })


</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-[calc(100vh+0.5px)] w-full flex flex-col justify-center p-24 bg-neutral-950/50">
      <h1 class="text-3xl font-bold text-white">{{ $route.params.idx }}</h1>
      <NuxtLink to="/test" class="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md">Liat Kucing</NuxtLink>
    </div>
  </div>
</template>
