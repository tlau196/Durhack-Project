<script lang="ts">
  import { loadScript } from "@paypal/paypal-js";
  import { onMount } from "svelte";

  onMount(async () => {
    try {
      const paypal = await loadScript({
        clientId:
          "AbCl9j_i1_VBpYnhinPt_ibG5hHXYkuSTp0uZe9i00c6kR4j6CMSqpeo7JBeCD_tAf_1GsH5pW9yhqvx",
        currency: "GBP",
      });

      paypal!.Buttons!({
        createOrder: function (data: any, actions: any) {
          console.log(data);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "GBP",
                  value: "0.69",
                },
              },
            ],
          });
        },
        onApprove: function (data: any, actions: any) {
          return actions.order.capture().then(function (details: any) {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      }).render("#paypal-button-container");
    } catch (err) {
      console.error(err);
    }
  });
</script>

<slot />
