<script lang="ts">
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
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
        const res = await fetch("https://durhack-express.onrender.com/prod/allprod")
        const data = await res.json()
        products = data.filter((element: Listing) => element.labels[0] == "album")
        console.log(products)
 
        const imagePromises = products.map(async (element: Listing) => {
            const resImages = await fetch(`https://durhack-express.onrender.com/prod/image/${element.ID}`);
            const dataImages = await resImages.text();
            return dataImages;
        });

        images = await Promise.all(imagePromises);

        productsAndImages = products.map((product: object, index: number) => ({ product, image: images[index] }));

        
    })
    


</script>


<section>
  <HeaderWork />
  <div class="bg-secondary py-12 px-20 mb-12 space-y-8">
    <div class="bg-white rounded-lg py-8 text-black">
      {#if productsAndImages}
        <h2 class="font-bold pl-6 py-4 my-4 text-3xl">Latest Music Albums</h2>
        <div class="px-6 m-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {#each productsAndImages as item}
            <ul>
              <li class="group">
                <a href={`/listings/${item.product.ID}`}>
                  <div>
                    <div class="flex items-center justify-between">
                      <p class="test-2x1 group-hover:-translate-y-4 font-semibold">
                        {item.product.product_name}
                      </p>
                      <p class="group-hover:-translate-y-4">£{item.product.price}</p>
                    </div>
                    <img class="rounded-lg aspect-[1/1] transition duration-125 group-hover:scale-110" src={item.image} alt="yes" />
                    <p class="group-hover:translate-y-4 overflow-hidden truncate">{item.product.product_description}</p>
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
  </div>
  <Footer />
</section>
