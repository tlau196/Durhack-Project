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

  let user: User;

  onMount(() => {
    authStore.subscribe((u) => (user = u));
  });

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    createNewListing(name, description, price, user.uid).then(() =>
      goto("/user/dashboard")
    );
  }
</script>

<Navbar />

<div class="p-8">
  <h1 class="text-5xl font-semibold">New Listing</h1>

  <form on:submit={handleSubmit} class="flex flex-col gap-3">
    <label for="product_name">Product Name</label>
    <input
      bind:value={name}
      type="text"
      id="product_name"
      name="product_name"
    />

    <label for="product_description">Product Description</label>
    <textarea
      bind:value={description}
      id="product_description"
      name="product_description"
    />

    <label for="product_price">Product Price</label>
    <input
      bind:value={price}
      type="number"
      min="1"
      step="any"
      id="product_price"
      name="product_price"
    />

    <!-- <label for="product_image">Product Image</label> -->
    <!-- <input type="file" id="product_image" name="product_image" /> -->

    <button type="submit">Create Listing</button>
  </form>
</div>
