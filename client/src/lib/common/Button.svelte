<script context="module" lang="ts">
  export enum ButtonBackgroundColour {
    Red = "bg-red-500",
    Blue = "bg-blue-500",
    Green = "bg-green-500",
    Gray = "bg-gray-200",
  }
</script>

<script lang="ts">
  export let onClick: () => void;
  export let darkText = true;
  export let backgroundColour: ButtonBackgroundColour;
</script>

<button
  class={`px-4 py-2 ${
    darkText ? "text-gray-900" : "text-gray-50"
  } ${backgroundColour} rounded-sm flex flex-row gap-3`}
  on:click={onClick}
>
  <slot />
</button>
