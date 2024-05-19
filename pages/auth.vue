<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <main class="bg-white flex w-full h-screen justify-center items-center">
    <Login :on-success="() => router.push('/admin')"
      ><p class="mb-2 text-black/50">I'm sorry this page is blinding.</p></Login
    >
  </main>
</template>
