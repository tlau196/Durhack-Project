<script context="module" lang="ts">
  export enum ButtonBackgroundColour {
    Red = "red",
    Blue = "blue",
    Green = "green",
  }
</script>

<script lang="ts">
  export let text: string;
  export let onClick: () => void;
  export let darkText = true;
  export let backgroundColour = ButtonBackgroundColour.Red;
</script>

<button
  class={`px-4 py-2 ${
    darkText ? "text-gray-900" : "text-gray-50"
  } bg-${backgroundColour}-600`}
  on:click={onClick}
>
  {text}
</button>
