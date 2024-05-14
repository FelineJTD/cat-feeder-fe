<script setup>
import { ref } from "vue";

const props = defineProps({
  onSuccess: Function,
});

const isLogin = ref(true);

const errorLogin = ref("");
const errorRegister = ref("");

const login = async (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);

  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(fd)),
  });

  const data = await res.json();

  if (res.ok) {
    console.log("Logged in");
    localStorage.setItem("token", data.token);
    props.onSuccess();
  } else {
    console.log("Failed to log in");
    errorLogin.value = data.message;
  }
};

const register = async (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);

  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(fd)),
  });

  const data = await res.json();

  if (res.ok) {
    console.log("Registered");
    localStorage.setItem("token", data.token);
    props.onSuccess();
  } else {
    console.log("Failed to log in");
    errorLogin.value = data.message;
  }
};
</script>

<template>
  <div v-if="isLogin">
    <h1 class="text-2xl mb-2">Log in</h1>
    <slot></slot>
    <form class="min-h-[13rem]" @submit="login">
      <input
        type="text"
        placeholder="Email"
        name="email"
        class="block"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        class="block"
        required
      />
      <div class="flex items-center">
        <button
          type="submit"
          class="block mt-2 px-4 py-2 self-end bg-primary text-black rounded-full"
        >
          Log in
        </button>
        <p class="ml-4 text-red-500 text-sm">{{ errorLogin }}</p>
      </div>
    </form>
    <p>
      No account yet?
      <span
        class="underline text-primary"
        role="button"
        @click="
          isLogin = false;
          errorRegister = '';
        "
        >Register now</span
      >.
    </p>
  </div>
  <div v-else>
    <h1 class="text-2xl mb-2">Sign up</h1>
    <slot></slot>
    <form class="min-h-[13rem]" @submit="register">
      <input
        type="text"
        placeholder="Username"
        name="name"
        class="block"
        required
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        class="block"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        class="block"
        required
      />
      <div class="flex items-center">
        <button
          type="submit"
          class="block mt-2 px-4 py-2 self-end bg-primary text-black rounded-full"
        >
          Sign up
        </button>
        <p class="ml-4 text-red-500 text-sm">{{ errorRegister }}</p>
      </div>
    </form>
    <p>
      Have an account?
      <span
        class="underline text-primary"
        role="button"
        @click="
          isLogin = true;
          errorLogin = '';
        "
        >Log in</span
      >.
    </p>
  </div>
</template>

<style scoped>
input {
  @apply w-full p-2 mb-2 border border-black/20;
}
</style>
