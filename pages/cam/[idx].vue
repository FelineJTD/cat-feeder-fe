<script setup>
  import { onMounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appName = 'Liat Kucing Maem'
  const numOfCams = 2

  const currCam = parseInt(route.params.idx)

  const camName = "Labtek V"
  const viewer = 0

  const feed = () => {
    alert('Kucing berhasil diberi makan!')
  }
</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-screen w-full flex items-end justify-between py-16 px-32 text-white">
      <!-- INFO -->
      <div>
        <h1 class="text-primary">{{ camName }}</h1>
        <p class="text-white">{{ viewer }} orang menonton</p>
      </div>
      <!-- KASIH MAKAN BUTTON -->
      <button class="rounded-full text-4xl h-52 w-52 bg-primary font-header text-black shadow-[-8px_8px] hover:shadow-none hover:-translate-x-2 -translate-y-2 hover:translate-y-0" @click="feed">Kasih makan</button>
      <!-- LOGO -->
      <img src="/logo.svg" alt="Liat Kucing Maem" class="h-[60px] w-fit absolute top-16 object-left object-contain" height="60" />
      <!-- RIGHT DECOR -->
      <div class="absolute right-32 top-0 border-r-2 border-white hidden lg:block h-1/3" />
    </div>
  </div>
</template>
