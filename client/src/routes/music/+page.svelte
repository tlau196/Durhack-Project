<script lang="ts">
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    import { onMount } from "svelte";

   interface Listing {
        id?: string;
        labels: string,
        product_description: string;
        product_name: string;
        seller_ID: string;
        price: number;
    }

    // let image = [];
    let products = null;
    let images: string[] = [];
    let productsAndImages = []

    onMount( async () => {
        const res = await fetch("http://localhost:5000/prod/allprod")
        const data = await res.json()
        products = data.filter((element: Listing) => element.labels[0] == "album")
        console.log(products)
 
        const imagePromises = products.map(async (element) => {
            const resImages = await fetch(`http://localhost:5000/prod/image/${element.ID}`);
            const dataImages = await resImages.text();
            return dataImages;
        });

        images = await Promise.all(imagePromises);

        productsAndImages = products.map((product: object, index: number) => ({ product, image: images[index] }));

        
    })
    


</script>

<HeaderWork />
<div class="px-12">
    
    {#if productsAndImages}
        <h2 class="text-5xl font-bold p-12">Music</h2>
        <div class="flex items-center justify-center">
            <!-- <FilterBox />  -->
            <div class="text-center px-12 py-4 grid grid-cols-3 gap-96">
                
                {#each productsAndImages as item}
                    <ul>
                        <li>
                            <a href={`/listings/${item.product.ID}`}>
                                <div>
                                    <p class="text-2xl font-semibold">{item.product.product_name}</p>
                                    <img src="{item.image}" alt="yes">
                                    <p>{item.product.product_description}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                {/each}
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}

</div>
<Footer />
