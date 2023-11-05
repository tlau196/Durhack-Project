<script lang="ts">
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import type { Listing } from "$lib/firebase";
  import { basketStore } from "$lib/stores";

  function handleRemoveFromBasket() {
    basketStore.update((basket) => {
      const index = basket.findIndex((item) => item.id === listing.id);
      basket.splice(index, 1);
      return basket;
    });
  }
  export let listing: Listing;
</script>

<div
  class="w-full my-8 py-8 px-20 flex border-4 border-black items-center justify-between gap-8"
>
  <div class="flex-1 flex items-start text-black font-bold justify-between flex-col">
    <h2 class="text-3xl">Name: {listing.product_name}</h2>
    <h2 class="text-3xl">Price: £{listing.price}</h2>
    <div class="w-full py-4 pt-6">
        <Button
            backgroundColour={ButtonBackgroundColour.Red}
            darkText={false}
            onClick={handleRemoveFromBasket}>Remove from basket</Button
        >
    </div>
  </div>
</div>
