<script lang="ts">
  import { goto } from "$app/navigation";
  import Navbar from "$lib/common/Navbar.svelte";
  import { createNewListing } from "$lib/firebase";
  import { authStore } from "$lib/stores";
  import type { User } from "firebase/auth";
  import { onMount } from "svelte";

  let name: string;
  let description: string;
  let price: number;
  let imageSelector: HTMLInputElement;
  let image: File;
  let labels: string;

  let user: User | null;

  onMount(() => {
    authStore.subscribe((u) => (user = u));

    imageSelector.addEventListener("change", (event: Event) => {
      image = (event.target as HTMLInputElement).files![0];
    });
  });

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    createNewListing(name, description, price, user!.uid, image, labels).then(
      () => goto("/user/dashboard")
    );
  }
</script>

<Navbar />

<div class="p-8">
  <h1 class="text-5xl py-4 font-semibold">New Listing</h1>

  <form on:submit={handleSubmit} class="flex flex-col py-4 gap-3">
    <label for="product_name">Product Name</label>
    <input
        style="border-radius:25px;"
      bind:value={name}
      type="text"
      id="product_name"
      name="product_name"
    />

    <label for="product_description">Product Description</label>
    <textarea
        style="border-radius:25px;"
      bind:value={description}
      id="product_description"
      name="product_description"
    />

    <label for="product_price">Product Price</label>
    <input
        style="border-radius:25px;"
      bind:value={price}
      type="number"
      min="1"
      step="any"
      id="product_price"
      name="product_price"
    />

    <label for="labels">Label</label>
    <select style="border-radius:25px;" bind:value={labels} id="labels" name="labels">
      <option value="album">Album</option>
      <option value="poster">Poster</option>
      <option value="merch">Merch</option>
    </select>

    <label for="product_image">Product Image</label>
    <input
      bind:this={imageSelector}
      type="file"
      id="product_image"
      name="product_image"
    />

    <!-- <label for="product_image">Product Image</label> -->
    <!-- <input type="file" id="product_image" name="product_image" /> -->
    <div class="flex justify-center items-center">
      <button
        class="bg-secondary text-white hover:font-semibold p-4 w-48"
        type="submit">Create Listing</button
      >
    </div>
  </form>
</div>
