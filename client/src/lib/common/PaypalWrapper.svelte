<script lang="ts">
  import { goto } from "$app/navigation";
  import { createOrder, type Listing, increaseBalance } from "$lib/firebase";
  import { authStore, basketStore } from "$lib/stores";
  import { loadScript } from "@paypal/paypal-js";
  import type { User } from "firebase/auth";
  import { onMount } from "svelte";

  let basketContents: Listing[];
  let user: User | null;

  basketStore.subscribe((basket) => {
    basketContents = basket;
  });
  authStore.subscribe((u) => {
    user = u;
  });

  $: subtotal = basketContents.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  $: tax = subtotal * 0.2;
  $: total = subtotal + tax;

  onMount(async () => {
    try {
      const paypal = await loadScript({
        clientId:
          "AbCl9j_i1_VBpYnhinPt_ibG5hHXYkuSTp0uZe9i00c6kR4j6CMSqpeo7JBeCD_tAf_1GsH5pW9yhqvx",
        currency: "GBP",
      });

      paypal!.Buttons!({
        createOrder: function (data: any, actions: any) {
          if (total === 0) {
            alert("You cannot checkout with an empty basket!");
            return;
          }

          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "GBP",
                  value: total.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: function (data: any, actions: any) {
          return actions.order.capture().then(function (details: any) {
            for (const item of basketContents) {
              createOrder(item.id!, user!.uid);
              increaseBalance(item.seller_ID, item.price);
            }

            // clear basket
            basketStore.set([]);
            goto("/user/dashboard");
          });
        },
      }).render("#paypal-button-container");
    } catch (err) {
      console.error(err);
    }
  });
</script>

<slot />
