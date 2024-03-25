<script setup>
  import { onMounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appName = 'Liat Kucing Maem'

  console.log(route.params.idx)

  onBeforeMount(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }),

  onMounted(() => {
    // on mouse scroll, change page
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY
      if (scroll > 0) {
        navigateTo(`/cam/${(parseInt(route.params.idx, 10) + 1)}`)
      } 
    })
  })


</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-[calc(100vh+1px)] w-full flex flex-col justify-center -pt-[1px] px-24 bg-neutral-950/50">
      <h1 class="text-3xl font-bold text-white">{{ $route.params.idx }}</h1>
      <NuxtLink to="/test" class="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md">Liat Kucing</NuxtLink>
    </div>
  </div>
</template>
