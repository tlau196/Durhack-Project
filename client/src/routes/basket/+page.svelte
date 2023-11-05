<script lang="ts">
  import Footer from "$lib/common/Footer.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import { basketStore } from "$lib/stores";
  import type { Listing } from "$lib/firebase";

  let basketContents: Listing[];
  basketStore.subscribe((basket) => {
    basketContents = basket;
  });

  $: subtotal = basketContents.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  $: tax = subtotal * 0.2;
  $: total = subtotal + tax;
</script>

<HeaderWork />
<div class="px-12 flex flex-col gap-6 items-center">
  <h1 class="text-7xl font-bold pt-8">Basket</h1>

  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between gap-6">
      <p class="text-2xl font-semibold">Subtotal</p>
      <p class="text-2xl font-semibold">£{subtotal.toFixed(2)}</p>
    </div>
    <div class="flex flex-row justify-between gap-6">
      <p class="text-2xl font-semibold">Tax</p>
      <p class="text-2xl font-semibold">£{tax.toFixed(2)}</p>
    </div>
    <div class="flex flex-row justify-between gap-6 border-t pt-2 border-t-black">
      <p class="text-2xl font-semibold">Total</p>
      <p class="text-2xl font-semibold">£{total.toFixed(2)}</p>
    </div>
  </div>

  <div id="paypal-button-container" class="w-1/2" />
</div>
<Footer />
