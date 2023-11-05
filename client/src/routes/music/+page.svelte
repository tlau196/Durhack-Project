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
    let yes = null;

    onMount( async () => {
        const res = await fetch("http://localhost:5000/prod/allprod")
        const data = await res.json()
        yes = data
    })

</script>

<HeaderWork />
<div class="px-12">
    
    {#if yes}
        <h2 class="text-5xl font-bold p-12">Music</h2>
        <div class="flex items-center justify-center">
            <!-- <FilterBox />  -->
            <div class="grid grid-cols-3 gap-96">
                <div>
                    {#each yes as item}
                        <p>{item.product_name}</p>
                        <p>{item.product_description}</p>
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}

</div>
<Footer />
