<script lang="ts">
  import Footer from "$lib/common/Footer.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import type { Listing } from "$lib/firebase";
  import { basketStore } from "$lib/stores";
  import BasketItem from "./BasketItem.svelte";

  let basketContents: Listing[];

  basketStore.subscribe((basket) => {
    basketContents = basket;
  });

  let itemCost = () => {};

  let Tax = () => {};

  let TotalCost = () => {};
</script>

<HeaderWork />
<div class="px-12">
  <h1 class="text-5xl font-bold pt-8">Basket</h1>

  {#each basketContents as listing}
    <BasketItem {listing} />
  {/each}
</div>
<Footer />
