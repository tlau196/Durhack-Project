<script lang="ts">
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"

   interface Listing {
        id?: string;
        labels: string,
        product_description: string;
        product_name: string;
        seller_ID: string;
        price: number;
    }

    // let image = [];

    const getProducts = async () => {
        const res = await fetch("http://localhost:5000/prod/allprod")
        const data = await res.json()
        const filteredData = data.filter((word: Listing) => word.labels == "album")

        // getImagesForProducts(filteredData)

        return filteredData
    }

    // const getImagesForProducts = async (filteredData: Listing) => {
    //     filteredData.forEach(async (element) => {
    //         let res = await fetch(`http://localhost:5000/prod/image/${element.ID}`)
    //         let data = await res.json()
    //         image.push(data)
    //     }) 
    // }
    

    getProducts()
</script>

<HeaderWork />
<div class="px-12">
    
    <h2 class="text-5xl font-bold p-12">Music</h2>
    <div class="flex items-center justify-center">
        <!-- <FilterBox />  -->
        {#await getProducts()}
            <p>Loading...</p>
        {:then data}
            <div class="grid grid-cols-3 gap-96">
                <div>
                    {#each data as datas}
                        <p>{datas.product_name}</p>
                    {/each}
                    <!-- {#each image as images} -->
                    <!--     <div> -->
                    <!--         <p>{datas.product_name}</p> -->
                    <!--         <p>{datas.product_description}</p> -->
                    <!--     </div> -->
                    <!-- {/each} -->
                    {#each data as datas}
                        <p>{datas.product_description}</p>
                    {/each}

                </div>
            </div>
        {:catch err}
            <p>Something went wrong {err}</p>
        {/await}
    </div>

</div>
<Footer />
