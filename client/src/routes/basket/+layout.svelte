<script>
  import AuthenticatedRoute from "$lib/common/AuthenticatedRoute.svelte";
  import PaypalWrapper from "$lib/common/PaypalWrapper.svelte";
</script>

<AuthenticatedRoute>
  <PaypalWrapper>
    <slot />
  </PaypalWrapper>
</AuthenticatedRoute>
