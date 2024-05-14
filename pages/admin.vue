<script setup>
import CardLineChart from "~/components/Cards/CardLineChart.vue";
</script>

<template>
  <div class="min-h-screen bg-[#2B2B2B] text-white">
    <div class="w-full h-60 bg-[#565656] absolute top-0" />

    <div
      class="py-16 mobile-landscape:py-8 px-8 mobile-landscape:px-8 md:px-16 lg:px-32 z-10 relative"
    >
      <div class="flex w-full items-end justify-between">
        <!-- logo -->
        <img
          src="/logo.svg"
          alt="Liat Kucing Maem"
          class="h-[60px] object-left object-contain"
          height="60"
        />
        <div class="flex flex-col items-end">
          <h1>Dashboard</h1>
          <Time />
        </div>
      </div>
      <div class="bg-[#2B2B2B] w-full rounded-3xl mt-12 p-8">
        <CardLineChart />
      </div>
    </div>
  </div>
</template>
