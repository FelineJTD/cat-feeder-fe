<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean
});

const emits = defineEmits(["closePanel"]);

const closePanel = () => {
  emits("closePanel");
};

const isLogin = ref(true);
</script>

<template>
  <dialog :open="props.isOpen" class="mt-12">
    <Panel class="min-w-[32rem]">
      <button
        @click="closePanel"
        class="absolute right-1 top-0 hover:text-primary p-2 text-2xl"
      >
        x
      </button>
      <div v-if="isLogin">
        <h1 class="text-2xl mb-2">Log in</h1>
        <slot></slot>
        <form class="min-h-[13rem]">
          <input type="text" placeholder="Username" name="name" class="block" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            class="block"
          />
          <button
            type="submit"
            class="block mt-2 px-4 py-2 self-end bg-primary text-black rounded-full"
          >
            Log in
          </button>
        </form>
        <p>
          No account yet?
          <span
            class="underline text-primary"
            role="button"
            @click="isLogin = false"
            >Register now</span
          >.
        </p>
      </div>
      <div v-else>
        <h1 class="text-2xl mb-2">Sign up</h1>
        <slot></slot>
        <form class="min-h-[13rem]">
          <input type="text" placeholder="Username" name="name" class="block" />
          <input type="text" placeholder="Email" name="email" class="block" />

          <input
            type="password"
            placeholder="Password"
            name="password"
            class="block"
          />
          <button
            type="submit"
            class="block mt-2 px-4 py-2 self-end bg-primary text-black rounded-full"
          >
            Sign up
          </button>
        </form>
        <p>
          Have an account?
          <span
            class="underline text-primary"
            role="button"
            @click="isLogin = true"
            >Log in</span
          >.
        </p>
      </div>
      <!-- <form v-else>
        <h1>Sign up</h1>
        <slot></slot>
        <input type="text" placeholder="Username" name="name" class="block" />
        <input type="text" placeholder="Email" name="email" class="block" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          class="block"
        />
        <button type="submit" class="block">Sign up</button>
        <p>
          Already have an account?
          <span class="" role="button" @click="isLogin = true">Sign in.</span>
        </p>
      </form> -->
    </Panel>
  </dialog>
</template>

<style scoped>
input {
  @apply w-full p-2 mb-2 border border-black/20;
}
</style>
