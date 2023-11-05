<script lang="ts">
  import { goto } from "$app/navigation";
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import Navbar from "$lib/common/Navbar.svelte";
  import {
    deleteListing,
    type Listing,
    type firebaseAuth,
  } from "$lib/firebase.js";
  import { authStore, basketStore } from "$lib/stores.js";
  import type { User } from "firebase/auth";
  import { onMount } from "svelte";

  export let data;

  let user: User | null;
  $: id = user?.uid;

  onMount(() => {
    authStore.subscribe((u) => (user = u));
  });

  function handleClickAddToBasket() {
    basketStore.update((basket) => {
      return [...basket, data as Listing];
    });
  }
</script>

<HeaderWork />

{#if data}
  <div class="p-8 grid grid-cols-3 gap-3">
    <div class="flex flex-col col-span-1 gap-3">
      <Button
        onClick={() => history.back()}
        backgroundColour={ButtonBackgroundColour.Gray}>Back</Button
      >
      <h1 class="text-5xl font-semibold">{data.product_name}</h1>
      <p>{data.product_description}</p>
      <p class="text-2xl font-semibold text-blue-500">£{data.price}</p>
      <div class="flex flex-row gap-3">
        <!-- show basket button or delete -->

        {#if user && id == data.seller_ID}
          <Button
            onClick={() => {
              deleteListing(data.id);
              goto("/user/dashboard");
            }}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Red}>Delete</Button
          >
        {:else if user}
          <Button
            onClick={handleClickAddToBasket}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Green}
            >Add to basket</Button
          >
        {:else}
          <Button
            onClick={() => goto("/user/login")}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Green}>Login to buy</Button
          >
        {/if}
      </div>
    </div>

    <img class="col-span-2" src={data.imageUrl} alt={data.product_name} />
  </div>
{:else}
  <p>Loading...</p>
{/if}
