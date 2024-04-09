<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const numOfCams = 2

  const indicatorArr = Array(numOfCams).fill(0).map((_, idx) => idx+1)

  const camName = "Labtek " + route.params.idx
  const viewer = 0

  const time = ref(new Date().toLocaleTimeString())

  const feed = () => {
    alert('Kucing berhasil diberi makan!')
  }

  // CLOCK
  onMounted(() => {
    setInterval(() => {
      time.value = new Date().toLocaleTimeString()
    }, 1000)
  })
</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1081" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-screen w-full flex items-end justify-between py-16 px-32 text-white">
      <!-- INFO -->
      <div class="flex h-1/2 items-end">
        <!-- INDICATOR -->
        <div class="flex flex-col gap-2 items-center mr-12">
          <div v-for="idx in indicatorArr" :key="idx" class="h-20 w-1" :class="(idx === parseInt(route.params.idx)) ? 'bg-primary' : 'bg-white opacity-50'" />
        </div>
        <div>
          <div class="flex gap-4 items-center -ml-2">
            <NuxtLink :to="'/cam/' + ((parseInt(route.params.idx) - 2 + numOfCams) % numOfCams + 1)" class="text-primary font-header text-2xl hover:-translate-x-2 p-2 duration-150 opacity-50 hover:opacity-100">
              <img src="/icons/arrow-circle-left.svg" alt="Previous camera" height="48" width="48" class="h-12 w-12 object-contain" />
            </NuxtLink>
            <NuxtLink :to="'/cam/' + (parseInt(route.params.idx) % numOfCams + 1)" class="text-primary font-header text-2xl hover:translate-x-2 p-2 duration-150 opacity-50 hover:opacity-100">
              <img src="/icons/arrow-circle-left.svg" alt="Next camera" height="48" width="48" class="h-12 w-12 object-contain rotate-180" />
            </NuxtLink>
          </div>
          <h1 class="text-primary mt-4">{{ camName }}</h1>
          <div class="flex text-white">
            <p class="min-w-24 w-fit">{{ time }}</p>
            <p> ◦ &nbsp;&nbsp;</p>
            <p>{{ viewer }} orang menonton</p>
          </div>
        </div>
      </div>
      <!-- KASIH MAKAN BUTTON -->
      <button class="duration-150 rounded-full text-4xl h-52 w-52 bg-primary font-header text-black shadow-[-8px_8px] hover:shadow-none hover:-translate-x-2 -translate-y-2 hover:translate-y-0" @click="feed">Kasih makan</button>
      <!-- LOGO -->
      <NuxtLink to="/" class="h-[60px] w-fit absolute top-16">
        <img src="/logo.svg" alt="Liat Kucing Maem" class="h-full w-full object-left object-contain" height="60" />
      </NuxtLink>
      <!-- RIGHT DECOR -->
      <div class="absolute right-32 top-0 border-r-2 border-white hidden lg:block h-1/3" />
    </div>
  </div>
</template>
