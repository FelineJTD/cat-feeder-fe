<script setup>
import { ref } from "vue";

const props = defineProps({
  onSuccess: Function,
});

const error = ref("");

const feed = async (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);

  const res = await fetch(
    import.meta.env.VITE_BACKEND_URL + "/food_transactions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        location_id: "662b81819d9b87970c50d1ca",
        amount: 20,
      }),
    }
  );

  const data = await res.json();

  if (res.ok) {
    console.log("Fed");
    props.onSuccess();
  } else {
    console.log("Failed to feed");
    error.value = data.message;
  }
};
</script>

<template>
  <div>
    <h1 class="text-2xl mb-2">Mau kasih makan berapa?</h1>
    <form class="min-h-[13rem]" @submit="feed">
      <input
        type="number"
        placeholder="Jumlah makanan"
        name="amount"
        class="block"
        required
      />
      <div class="flex items-center">
        <button
          type="submit"
          class="block mt-2 px-4 py-2 self-end bg-primary text-black rounded-full"
        >
          Kasih makan!
        </button>
        <p class="ml-4 text-red-500 text-sm">{{ error }}</p>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  @apply w-full p-2 mb-2 border border-black/20;
}
</style>
