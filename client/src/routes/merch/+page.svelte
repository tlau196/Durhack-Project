<script>
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    // import FilterBox from "$lib/common/HeaderWork.svelte"
    import { onMount } from "svelte";

    // let image = [];
    let products = null;
    let images = [];
    let productsAndImages = []

    onMount( async () => {
        const res = await fetch("http://localhost:5000/prod/allprod")
        const data = await res.json()
        products = data.filter((element) => element.labels[0] == "album")
 
        const imagePromises = products.map(async (element) => {
            const resImages = await fetch(`http://localhost:5000/prod/image/${element.ID}`);
            const dataImages = await resImages.text();
            return dataImages;
        });

        images = await Promise.all(imagePromises);

        productsAndImages = products.map((product, index) => ({ product, image: images[index] }));

        
    })

</script>

<HeaderWork />
<div class="px-12">
    
    {#if productsAndImages}
        <h2 class="text-5xl font-bold p-12">Merch</h2>
        <div class="flex items-center justify-center">
            <!-- <FilterBox />  -->
            <div class="px-12 grid grid-cols-3 gap-96">
                
                {#each productsAndImages as item}
                    <div>
                        <p>{item.product.product_name}</p>
                        <img src="{item.image}" alt="yes">
                        <p>{item.product.product_description}</p>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}

</div>
<Footer />

