<script lang="ts">
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import Navbar from "$lib/common/Navbar.svelte";
  import type { Listing } from "$lib/firebase.js";
  import { basketStore } from "$lib/stores.js";

  export let data;

  function handleClickAddToBasket() {
    basketStore.update((basket) => {
      return [...basket, data as Listing];
    });
  }
</script>

<HeaderWork />

{#if data}
  <div class="p-8 grid grid-cols-3">
    <div class="flex flex-col col-span-1">
      <h1 class="text-5xl font-semibold">{data.product_name}</h1>
      <p>{data.product_description}</p>
      <p class="text-2xl font-semibold text-blue-500">£{data.price}</p>
      <div class="flex flex-row gap-3">
        <Button
          onClick={handleClickAddToBasket}
          darkText={false}
          backgroundColour={ButtonBackgroundColour.Green}>Add to basket</Button
        >
      </div>
    </div>

    <img class="col-span-2" src={data.imageUrl} alt={data.product_name} />
  </div>
{:else}
  <p>Loading...</p>
{/if}
