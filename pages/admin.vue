<script setup>
const totalDonationData = ref(null);
const locationData = ref(null);

onBeforeMount(() => {
  fetch(import.meta.env.VITE_BACKEND_URL + "/dashboard/donation_transactions", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      totalDonationData.value = data.data;
    });

  fetch(import.meta.env.VITE_BACKEND_URL + "/locations", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      locationData.value = data.data;
    });
});
</script>

<template>
  <div class="min-h-screen bg-[#2B2B2B] text-white">
    <div
      class="w-full h-60 bg-[#565656] bg-[url('/decors/graph-paper.png')] absolute top-0"
    />

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
        <CardsCardLineChart
          v-if="totalDonationData"
          :data="totalDonationData"
        />
        <div class="flex mt-16 gap-24">
          <CardsCardLocationStats
            v-for="(loc, idx) in locationData"
            :key="loc._id"
            :data="loc"
            :idx="idx"
          />
        </div>
      </div>
    </div>
  </div>
</template>
