<script lang="ts">
  import Carousel from "$lib/common/Carousel.svelte";
  import Footer from "$lib/common/Footer.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import { onMount } from "svelte";

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
      <h2 class="font-bold pl-6 my-4 text-3xl">Latest Music Albums</h2>
      <div class="px-6 m-4 grid grid-cols-4 grid-rows-2 gap-4">
        <img src="" />
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
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
