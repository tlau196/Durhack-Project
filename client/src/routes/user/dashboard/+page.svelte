<script lang="ts">
  import { goto } from "$app/navigation";
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import { firebaseAuth } from "$lib/firebase";
  import { authStore } from "$lib/stores";
  import { signOut, type User } from "firebase/auth";

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
      Hello, <span class="font-semibold">{user?.displayName}</span>.
    </h2>
    <Button
      onClick={() => {
        signOut(firebaseAuth);
        goto("/");
      }}
      backgroundColour={ButtonBackgroundColour.Red}
      darkText={false}>Sign Out</Button
    >
  </div>
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  >
    <h2 class="text-3xl">Your Products</h2>
  </div>
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  >
    <h2 class="text-3xl">Stonks</h2>
  </div>
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-1 rounded-md"
  >
    <h2 class="text-3xl">Purchase History</h2>
  </div>
</div>
