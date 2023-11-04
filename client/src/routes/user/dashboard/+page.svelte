<script lang="ts">
  import { authStore } from "$lib/stores";
  import type { User } from "firebase/auth";

  let user: User;

  authStore.subscribe((u) => (user = u));
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-screen h-screen grid p-6 gap-6 grid-cols-3">
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-1 rounded-md"
  >
    <h2 class="text-2xl">
      Hello, <span class="font-semibold">{user.displayName}</span>.
    </h2>
  </div>
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  />
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  />
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-1 rounded-md"
  />
</div>
