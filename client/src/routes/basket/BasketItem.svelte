<script lang="ts">
  import type { Listing } from "$lib/firebase";

  export let listing: Listing;
</script>

<div
  class="my-8 py-8 px-20 bg-blue-600 flex items-center justify-between gap-8"
>
  <img src="#" alt="hello" />
  <div class="flex-1 flex items-start justify-between flex-col">
    <h2 class="text-3xl">Name: {listing.product_name}</h2>
    <h2 class="text-3xl">Price: {listing.price}</h2>
  </div>
</div>
