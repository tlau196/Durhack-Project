<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import type { HTMLImgAttributes } from "svelte/elements";
  import { scale } from "svelte/transition";

  let images: HTMLImgAttributes = [];

  onMount(async () => {
    const res = await fetch(`http://localhost:5000/prod/banner/1`);
    images.push({ src: await res.text(), alt: "", title: "" });
  });

  const scaleAnimation = (x: any) =>
    scale(x, { duration: 500, easing: quintOut });
</script>

<div class="px-20 w-full">
  <Carousel {images} transition={scaleAnimation} let:Controls let:Indicators>
    <Controls />
    <Indicators />
  </Carousel>
</div>
