<script lang="ts">
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import Navbar from "$lib/common/Navbar.svelte";
  import type { Listing } from "$lib/firebase.js";
  import { basketStore } from "$lib/stores.js";
  import { onMount } from "svelte";

  export let data;
    // let images: string[] = [];
    //
    // onMount( async () => {
    //     const imagePromises = data.map(async (element) => {
    //         const resImages = await fetch(`http://localhost:5000/prod/image/${element.ID}`);
    //         const dataImages = await resImages.text();
    //         return dataImages;
    //     });
    // })

  function handleClickAddToBasket() {
    basketStore.update((basket) => {
      console.log(data)
      return [...basket, data as Listing];
    });
  }
</script>

<Navbar />

{#if data}
  <div class="p-8">
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
{:else}
  <p>Loading...</p>
{/if}
