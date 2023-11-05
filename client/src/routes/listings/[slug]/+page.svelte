<script lang="ts">
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import Navbar from "$lib/common/Navbar.svelte";
  import { basketStore } from "$lib/stores.js";

  export let data;

  $: listing = data.listing!;

  function handleClickAddToBasket() {
    basketStore.update((basket) => {
      return [...basket, listing];
    });
  }
</script>

<Navbar />

{#if listing}
  <div class="p-8">
    <h1 class="text-5xl font-semibold">{listing.product_name}</h1>
    <p>{listing.product_description}</p>
    <p class="text-2xl font-semibold text-blue-500">£{listing.price}</p>

    <div class="flex flex-row gap-3">
      <Button
        onClick={handleClickAddToBasket}
        darkText={false}
        backgroundColour={ButtonBackgroundColour.Green}>Add to basket</Button
      >
    </div>
  </div>
{:else}
  <p>Loading...</p>
{/if}
