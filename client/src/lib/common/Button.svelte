<script context="module" lang="ts">
  export enum ButtonBackgroundColour {
    Red = "bg-red-500",
    Blue = "blue",
    Green = "green",
  }
</script>

<script lang="ts">
  export let onClick: () => void;
  export let darkText = true;
  export let backgroundColour = ButtonBackgroundColour.Red;
</script>

<button
  class={`px-4 py-2 ${
    darkText ? "text-gray-900" : "text-gray-50"
  } ${backgroundColour} rounded-sm`}
  on:click={onClick}
>
  <slot />
</button>
