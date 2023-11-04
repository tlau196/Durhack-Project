<script lang="ts">
    import "../../../../whaleLogo.png";
    import Button, { ButtonBackgroundColour } from "$lib/common/Button.svelte"
    import Searchbar from "./Searchbar.svelte";
</script>

<div class="px-4 py-4">
    <div class="flex items-center justify-between">
        <img src="#" alt="logo">

        <Searchbar />

        <div class="flex items-center justify-between gap-6">
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
    <div class="my-4">
        <ul class="flex justify-center items-center gap-4">
            <li class="border-"><a href="/user/login">Home</a></li>
            <li><a href="">Music</a></li>
            <li><a href="">New Release</a></li>
            <li><a href="">Saved</a></li>
        </ul>
    </div>
</div>

