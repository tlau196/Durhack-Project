<script lang="ts">
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    // import FilterBox from "$lib/common/HeaderWork.svelte"
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
        products = data.filter((element: Listing) => element.labels[0] == "poster")
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

<HeaderWork />
<div class="px-12">
    

        <!-- <FilterBox />  -->
    {#if productsAndImages}
        <h2 class="text-5xl font-bold text-center p-12">Poster</h2>
        <div class="flex items-center justify-center">
            <!-- <FilterBox />  -->
            <div class="px-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-96 py-4">
                
                {#each productsAndImages as item}
                    <ul>
                        <li>
                            <a href={`/listings/${item.product.ID}`}>
                                <div>
                                    <p class="py-2 text-2xl font-semibold">{item.product.product_name}</p>
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
