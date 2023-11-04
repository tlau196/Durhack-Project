<script lang="ts">
  import { goto } from "$app/navigation";
  import { firebaseAuth } from "$lib/firebase";
  import { authStore } from "$lib/stores";
  import type { User } from "firebase/auth";
  import { onMount } from "svelte";

  let loaded = false;
  let user: User;

  onMount(() => {
    authStore.subscribe((u) => {
      user = u;
    });

    firebaseAuth.authStateReady().then(() => {
      loaded = true;

      if (!user) {
        goto("/user/login");
      }
    });
  });
</script>

{#if loaded}
  <slot />
{:else}
  <p>Loading...</p>
{/if}
