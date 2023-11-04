<script>
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="w-screen h-screen flex items-center justify-center">
  <div class="flex border-2 border-gray-200 rounded-md px-8 py-6">
    <h1 class="text-4xl font-medium">Login</h1>

    <Button
      text="Login with Google"
      onClick={() => console.log("handle sign in with google")}
      darkText={false}
      backgroundColour={ButtonBackgroundColour.Red}
    />
  </div>
</div>
