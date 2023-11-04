<script lang="ts">
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import Navbar from "$lib/common/Navbar.svelte";

  export let data;

  $: listing = data.listing;

  function handleClickPurchase() {}
</script>

<Navbar />

{#if listing}
  <div class="p-8">
    <h1 class="text-5xl font-semibold">{listing.product_name}</h1>
    <p>{listing.product_description}</p>
    <p class="text-2xl font-semibold text-blue-500">£{listing.price}</p>

    <div class="flex flex-row gap-3">
      <div id="paypal-button-container" />
    </div>
  </div>
{:else}
  <p>Loading...</p>
{/if}
