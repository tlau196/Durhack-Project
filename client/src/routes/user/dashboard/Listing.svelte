<script lang="ts">
  import Navbar from "$lib/common/Navbar.svelte";
  import type { Listing } from "$lib/firebase";

  export let listing: Listing;
</script>

<div
  class="flex flex-row items-center gap-3 border-2 rounded-md border-gray-500 px-4 py-2"
>
  <h2 class="text-lg font-semibold">{listing.product_name}</h2>
  <p>{listing.product_description}</p>
</div>
