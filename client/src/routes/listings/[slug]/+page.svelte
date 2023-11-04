<script lang="ts">
  import Navbar from "$lib/common/Navbar.svelte";

  export let data;

  $: listing = data.listing;
</script>

<Navbar />

{#if listing}
  <div class="p-8">
    <h1 class="text-5xl font-semibold">{listing.product_name}</h1>
    <p>{listing.product_description}</p>
  </div>
{:else}
  <p>Loading...</p>
{/if}
