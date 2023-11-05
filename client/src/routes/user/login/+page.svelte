<script lang="ts">
  import { firebaseAuth, signInWithGoogle } from "$lib/firebase";
  import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte";
  import { goto } from "$app/navigation";
  import Navbar from "$lib/common/Navbar.svelte";
  import Footer from "$lib/common/Footer.svelte";
  import HeaderWork from "$lib/common/HeaderWork.svelte";
  import { signInWithEmailAndPassword } from "firebase/auth";

  let email: string;
  let password: string;

  function handleClickSignIn() {
    const res = signInWithGoogle().then(() => {
      goto("/user/dashboard");
    });
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<HeaderWork />

<div class="h-screen flex items-center justify-center">
  <div
    class="flex flex-col items-center gap-6 border-2 border-gray-200 rounded-md px-8 py-6"
  >
    <h1 class="text-3xl font-medium">Login</h1>

    <input bind:value={email} type="email" placeholder="Email" class="" />
    <input
      bind:value={password}
      type="password"
      placeholder="Password"
      class=""
    />

    <Button
      onClick={() => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
        goto("/user/dashboard");
      }}
      darkText={true}
      backgroundColour={ButtonBackgroundColour.Gray}
    >
      Login with Email
    </Button>

    <Button
      onClick={handleClickSignIn}
      darkText={true}
      backgroundColour={ButtonBackgroundColour.Gray}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        ><path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        /><path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        /><path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        /><path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        /><path d="M1 1h22v22H1z" fill="none" /></svg
      >
      Login with Google
    </Button>

    <p>
      Don't have an account? <a class="text-blue-500" href="/user/register"
        >Sign up</a
      >
    </p>
  </div>
</div>

<Footer />
