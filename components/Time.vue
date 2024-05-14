<script setup>
const time = ref(new Date().toLocaleTimeString());

defineProps({
  class: String,
});

// CLOCK
onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>

<template>
  <p :class="class">{{ time }}</p>
</template>
