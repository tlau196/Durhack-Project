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
  class="my-8 py-8 px-20 bg-blue-600 flex items-center justify-between gap-8"
>
  <img src="#" alt="hello" />
  <div class="flex-1 flex items-start justify-between flex-col">
    <h2 class="text-3xl">Name: {listing.product_name}</h2>
    <h2 class="text-3xl">Price: {listing.price}</h2>

    <Button
      backgroundColour={ButtonBackgroundColour.Red}
      darkText={false}
      onClick={handleRemoveFromBasket}>Remove from basket</Button
    >
  </div>
</div>
