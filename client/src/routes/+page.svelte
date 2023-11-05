<script lang="ts">
  import Carousel from "$lib/common/Carousel.svelte";
  import Footer from "$lib/common/Footer.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import { onMount } from "svelte";

  interface Listing {
    ID?: string;
    labels: string[],
    product_description: string;
    product_name: string;
    seller_ID: string;
    price: number;
    }

    // let image = [];
    let products = null;
    let images: string[] = [];
    let productsAndImages:object[] = []

    onMount( async () => {
        const res = await fetch("http://127.0.0.1:5000/prod/allprod");
        const products = await res.json();
        console.log(products);

        const imagePromises = products.map(async (element: Listing) => {
            const resImages = await fetch(`http://127.0.0.1:5000/prod/image/${element.ID}`);
            const dataImages = await resImages.text();
            return dataImages;
        });

        images = await Promise.all(imagePromises);
    
        productsAndImages = products.map((product: object, index: number) => ({ product, image: images[index] }));

    });

  const root = "https//127.0.0.1:5000/";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <HeaderWork />
  <Carousel />
  <div class="bg-secondary py-12 px-20 mb-12 space-y-8">
    <div class="bg-white rounded-lg py-8 text-black">
    {#if productsAndImages}
      <h2 class="font-bold pl-6 my-4 text-3xl">Latest Music Albums</h2>
      <div class="px-6 m-4 grid grid-cols-4 grid-rows-2 gap-4">
        {#each productsAndImages as item}
            <ul>
                <li>
                    <a href={`/listings/${item.product.ID}`}>
                        <div>
                            <p class="test-2x1 font-semibold">{item.product.product_name}</p>
                            <img src="{item.image}" alt="yes">
                            <p>{item.product.product_description}</p>
                        </div>
                    </a>
                </li>
            </ul>
        {/each}
      </div>
    {:else}
        <p>Loading...</p>
    {/if}
    </div>
    <div class="bg-white rounded-lg py-8 text-black">
      <h2 class="my-4 pl-6 font-bold text-3xl">Secret Deals</h2>
      <div class="px-6 m-4 flex items-center justify-between gap-36">
        <p>Hello</p>
        <div class="flex-1 grid grid-cols-3 grid-rows-2 gap-8">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</section>
