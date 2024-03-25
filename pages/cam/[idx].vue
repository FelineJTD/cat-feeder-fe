<script setup>
  import { onMounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appName = 'Liat Kucing Maem'
  const numOfCams = 2

  console.log(route.params.idx)

  const throttle = (cb, timeout) => {
    let lastCall = 0;

    return function() {
      if (new Date() - lastCall > timeout) {
        lastCall = new Date();

        cb();
      }
    }
  }

  const nav = (scroll) => {
    console.log(scroll)
    if (scroll > 80) {
      if (parseInt(route.params.idx, 10) >= numOfCams) {
        navigateTo('/cam/1')
      } else {
        navigateTo(`/cam/${(parseInt(route.params.idx, 10) + 1)}`)
      }
    } else if (scroll < -80) {
      if (parseInt(route.params.idx, 10) <= 1) {
        navigateTo('/')
      } else {
        navigateTo(`/cam/${(parseInt(route.params.idx, 10) - 1)}`)
      }
    }
  }

  onBeforeMount(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }),

  onMounted(() => {
    window.addEventListener('wheel', (e) => {
      throttle(nav(e.deltaY), 10000)
    })
  })


</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-screen w-full flex flex-col justify-center p-24 bg-neutral-950/50">
      <h1 class="text-3xl font-bold text-white">{{ $route.params.idx }}</h1>
      <NuxtLink to="/test" class="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md">Liat Kucing</NuxtLink>
    </div>
  </div>
</template>
