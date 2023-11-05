<script lang="ts">
  import { getListing, type Listing, type Order } from "$lib/firebase";
  import { onMount } from "svelte";

  export let order: Order;
  let listing: Listing;
  let loading = true;

  onMount(async () => {
    try {
      const l = await getListing(order.listing_ID);
      if (l) {
        listing = l;
        loading = false;
      }
    } catch (error) {
      console.error(error);
    }
  });
</script>

{#if loading}
  <p>Loading...</p>
{:else}
  <div
    class="flex flex-row items-center gap-3 border-2 rounded-md border-gray-500 px-4 py-2"
  >
    <h2 class="text-lg font-semibold">{listing.product_name}</h2>
    <p>{order.fulfilled ? "Fulfilled" : "Unfilfilled"}</p>
    <p>{order.created_at}</p>
  </div>
{/if}
