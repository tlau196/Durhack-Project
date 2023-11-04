<script lang="ts">
    import "../../../../whaleLogo.png";
    import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte"
</script>

<div class="flex items-center justify-between">
    <img src="#" alt="logo">

    <!-- <Searchbar /> -->

    <div class="flex items-center justify-between">
        <!-- wishlist -->
       <Button
            onClick={() => console.log("Wishlist button")}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Red}
        >
        Hello
        </Button>

        <!-- ShoppingList -->
       <Button
            onClick={() => console.log("Shopping Button")}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Red}
        >
        Hello
        </Button>

        <!-- User -->
       <Button
            onClick={() => console.log("User button")}
            darkText={false}
            backgroundColour={ButtonBackgroundColour.Red}
        >
        Hello
        </Button>
    </div>
</div>

