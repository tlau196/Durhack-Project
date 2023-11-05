<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  const images: any = [];

  onMount(async () => {
    for (let i = 1; i < 9; i++) {
      const res = await fetch(`http://localhost:5000/prod/banner/${i}`);
      console.log(await res.text());
      images.push({ src: await res.text(), alt: "", title: "" });
    }
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
