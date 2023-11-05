<script>
    import Footer from "$lib/common/Footer.svelte";
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    
    
    let itemCost = () => {
        
    }

    let Tax = () => {
        
    }

    let TotalCost = () => {
        
    }

</script>


<HeaderWork />
<div class="px-12">

    <h1 class="text-5xl font-bold pt-8">Basket</h1>

    <!-- Dummy Data -->
    <div class="my-8 py-8 px-20 bg-blue-600 flex items-center justify-between gap-8">
        <img src="#" alt="hello">
        <div class="flex-1 flex items-start justify-between flex-col">
            <h2 class="text-3xl">Name: </h2>
            <h2 class="text-3xl">Price: </h2>
        </div>
    </div>

    <div class="my-8 py-8 px-20 bg-blue-600 flex items-center justify-between gap-8">
        <img src="#" alt="hello">
        <div class="flex-1 flex items-start justify-between flex-col">
            <h2 class="text-3xl">Name: </h2>
            <h2 class="text-3xl">Price: </h2>
        </div>
    </div>

    <div class="my-8 py-8 px-20 bg-blue-600 flex items-center justify-between gap-8">
        <img src="#" alt="hello">
        <div class="flex-1 flex items-start justify-between flex-col">
            <h2 class="text-3xl">Name: </h2>
            <h2 class="text-3xl">Price: </h2>
        </div>
    </div>

    <div class="my-8 bg-blue-600 p-5">
        <h2 class="text-5xl">Total</h2>
        <div class="p-5">
            <h2 class="text-xl">Item Cost: </h2>
            <h2 class="text-xl">Tax: </h2>
            <h2 class="text-xl">Total Cost: </h2>
            <h2 class="text-xl">Paypal</h2>
        </div>
    </div>
    <!-- {#each products as product} -->
    <!-- {/each} -->
</div>
<Footer />
