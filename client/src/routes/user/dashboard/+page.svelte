<script lang="ts">
  import { goto } from "$app/navigation";
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import Navbar from "$lib/common/Navbar.svelte";
  import {
    firebaseAuth,
    getUsersListings,
    getUsersOrders,
    type Account,
    type Listing as ListingType,
    type Order as OrderType,
    getAccountData,
    createAccountData,
  } from "$lib/firebase";
  import { authStore } from "$lib/stores";
  import { signOut, type User } from "firebase/auth";
  import { onMount } from "svelte";
  import Listing from "./Listing.svelte";
  import Order from "./Order.svelte";
  import stonk from "$lib/images/stonks.jpg";

  let user: User | null;

  authStore.subscribe((u) => (user = u));

  let listings: ListingType[];
  let loadingListings = true;

  let orders: OrderType[];
  let loadingOrders = true;

  let account: Account;
  let loadingAccount = true;

  onMount(async () => {
    const uid = user!.uid;
    getUsersListings(uid).then((l) => {
      listings = l!;
      loadingListings = false;
    });

    getUsersOrders(uid).then((o) => {
      orders = o!;
      loadingOrders = false;
    });

    try {
      const res = await getAccountData(uid);
      if (res) {
        account = res;
      } else {
        await createAccountData(uid);
      }

      loadingAccount = false;
    } catch (error) {
      await createAccountData(uid);
      account = { balance: 0 };
    }
  });
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />

<div class="grid p-6 gap-6 md:grid-cols-3 grid-cols-1">
  <div
    class="bg-neutral-200 flex flex-col gap-4 p-8 transition duration-200 hover:bg-neutral-300 col-span-1 rounded-md"
  >
    <h2 class="text-2xl">
      Hello, <span class="font-semibold">{user?.displayName}</span>.
    </h2>
    <Button
      onClick={() => {
        signOut(firebaseAuth);
        authStore.set(null);
        goto("/");
      }}
      backgroundColour={ButtonBackgroundColour.Red}
      darkText={false}>Sign Out</Button
    >
    {#if loadingAccount}
      <p>Loading...</p>
    {:else}
      <h3 class="text-2xl">Account Balance</h3>
      <h1 class="text-6xl font-bold">£{account.balance}</h1>
    {/if}
  </div>
  <div
    class="bg-neutral-200 p-8 flex gap-3 flex-col transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  >
    <h2 class="text-3xl">Your Listings</h2>

    <div class="flex gap-3 flex-col">
      {#if loadingListings}
        <p>Loading...</p>
      {:else}
        {#each listings as listing}
          <Listing {listing} />
        {/each}
      {/if}
    </div>

    <Button
      backgroundColour={ButtonBackgroundColour.Blue}
      darkText={false}
      onClick={() => goto("/listings/new")}>Post a listing</Button
    >
  </div>
  <div
    class="bg-neutral-200 p-8 transition duration-200 hover:bg-neutral-300 col-span-2 rounded-md"
  >
    <h2 class="text-3xl">Stonks</h2>

    <img src={stonk} alt="stonk" />
  </div>
  <div
    class="bg-neutral-200 flex flex-col gap-5 p-8 transition duration-200 hover:bg-neutral-300 col-span-1 rounded-md"
  >
    <h2 class="text-3xl">Purchase History</h2>

    <div class="flex gap-3 flex-col">
      {#if loadingOrders}
        <p>Loading...</p>
      {:else}
        {#each orders as order}
          <Order {order} />
        {/each}
      {/if}
    </div>
  </div>
</div>
