<script setup>
const props = defineProps({
  closePanel: Function,
});

onMounted(() => {
  setTimeout(() => {
    props.closePanel();
  }, 3000);
});
</script>

<template>
  <button
    @click="closePanel"
    class="absolute right-1 top-0 hover:text-primary p-2 text-2xl"
  >
    x
  </button>
  <div>
    <h1 class="text-2xl mb-2">Sukses kasih makan!</h1>
    <p>Terima kasih sudah memberi makan kucing.</p>
    <div class="animate-timeout bg-primary h-1 mt-4" />
  </div>
</template>
