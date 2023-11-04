<script lang="ts">
    import HeaderWork from "$lib/common/HeaderWork.svelte"
    import Searchbar from "$lib/common/Searchbar.svelte";
</script>



<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <HeaderWork /> 
    <h1>Hello, world!</h1>

    <h2 class="text-red-600">
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>
</section>
