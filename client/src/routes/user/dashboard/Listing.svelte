<script lang="ts">
  import type { Listing } from "$lib/firebase";

  export let listing: Listing;
</script>

<a
  class="flex flex-row items-center gap-3 border-2 rounded-md border-gray-500 px-4 py-2"
  href={`/listings/${listing.id}`}
>
  <h2 class="text-lg font-semibold">{listing.product_name}</h2>
  <p>{listing.product_description}</p>
</a>
