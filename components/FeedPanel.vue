<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["closePanel"]);

const state = ref("loading");

// check if the user is logged in
onBeforeMount(() => {
  if (!localStorage.getItem("token")) {
    state.value = "login";
  } else {
    state.value = "feed";
  }
});

const closePanel = () => {
  emits("closePanel");
};

const error = ref("");
</script>

<template>
  <dialog :open="props.isOpen" class="mt-12 z-50">
    <Panel class="w-[32rem] max-w-[calc(100vw-4rem)]">
      <!-- close button -->
      <button
        @click="closePanel"
        class="absolute right-1 top-0 hover:text-primary p-2 text-2xl"
      >
        x
      </button>
      <Loading v-if="state === 'loading'" />
      <Login
        v-else-if="state === 'login'"
        :on-success="() => (state = 'feed')"
      />
      <Feed
        v-else-if="state === 'feed'"
        :on-success="() => (state = 'success')"
      />
      <Success
        v-else-if="state === 'success'"
        :close-panel="() => closePanel()"
      />
    </Panel>
  </dialog>
</template>

<style scoped>
input {
  @apply w-full p-2 mb-2 border border-black/20;
}
</style>
