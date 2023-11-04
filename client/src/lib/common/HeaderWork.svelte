<script lang="ts">
  import Navbar from "./Navbar.svelte";
</script>

<div class="bg-primary text-white px-12 py-4">
  <Navbar />
  <div class="my-4">
    <ul class="mx-12 flex justify-between items-center gap-4">
      <li class="border-l-secondary"><a href="/">Home</a></li>
      <li class="border-l-secondary"><a href="/music">Music</a></li>
      <li class="border-l-secondary"><a href="">New Release</a></li>
      <li><a href="">Saved</a></li>
    </ul>
  </div>
</div>
