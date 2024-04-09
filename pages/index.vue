<script setup>
  import { onMounted, onBeforeMount } from 'vue'

  onBeforeMount(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }),

  onMounted(() => {
    window.onscroll = function(e) {
      if (this.oldScroll < this.scrollY) {
        navigateTo('/cam/1')
      }
      this.oldScroll = this.scrollY;
    }
  })

</script>

<template>
  <div>
    <img src="https://picsum.photos/1920/1080" alt="Background" class="fixed top-0 left-0 h-screen w-full object-cover -z-10" />
    <div class="h-[calc(100vh+0.5px)] w-full flex flex-col -pt-[0.5px] px-32 bg-neutral-950/50 text-white">
      <!-- COPYRIGHT (TOP BORDER) -->
      <div class="absolute left-0 top-16 border-t-2 border-white w-[calc(100%-8rem)] pt-2">
        <p class="text-xs text-right">Made with <3 for IF4051 by <span class="font-header text-primary">Clair, Addin, Felicia, Fandi, & Anggie</span> © 2024</p>
      </div>
      <!-- LOGO & DESCRIPTION (MAIN) -->
      <div class="border-l-4 border-white h-1/2 flex items-end pl-12">
        <img src="/logo.svg" alt="Liat Kucing Maem" class="h-[120px] aspect-auto w-fit" height="120" />
      </div>
      <p class="leading-9 lg:w-2/3 xl:w-1/2 mt-12">
        Siapa sih yang gak suka liat kucing-kucing ITB? Sekarang, kamu gak usah datang ke kampus buat liat kucing! 
        Website ini hadir dengan <span class="text-primary font-header text-2xl">live stream pos-pos makanan kucing</span> yang tersebar di seluruh kampus.
        Jadi, kalian bisa nonton kucing-kucing ITB sambil kasih makan mereka dari jarak jauh. 
        Scroll ke bawah untuk liat live stream dari kamera-kamera kami!
      </p>
      <NuxtLink to="/cam/1" class="hover:mt-5 hover:ml-0 px-6 py-3 bg-primary text-black rounded-full font-header w-fit hover:shadow-none shadow-[-4px_4px] mt-4 ml-1 duration-150">Liat kucing maem!</NuxtLink>
      <!-- RIGHT DECOR -->
      <div class="absolute right-32 bottom-0 border-r-2 pt-12 pr-4 hidden lg:block border-white">
        <img src="/decors/arrows.svg" alt="" />
      </div>
    </div>
  </div>
</template>
