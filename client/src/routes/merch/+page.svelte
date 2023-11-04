<script>
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    // import FilterBox from "$lib/common/HeaderWork.svelte"


    const getProducts = async () => {
        const res = await fetch("http://localhost:5000/prod/allprod")
        const data = await res.json()
        console.log(data)
        return data
    }

    getProducts()

</script>

<HeaderWork />
<div class="px-12">
    
    <h2 class="text-5xl font-bold p-12">Merch</h2>
    <div class="flex items-center justify-center">

        <!-- <FilterBox />  -->
        <div class="grid grid-cols-3 gap-96">
        {#await getProducts()}
            <p>Loading...</p>
        {:then data}
            {#each data as datas}
                {#if datas.labels == "merch"}
                    <div>
                        <p>{datas.product_name}</p>
                        <p>{datas.product_description}</p>
                    </div>
                {/if}
            {/each}
        {/await}
        </div>
    </div>

</div>
<Footer />

