<script lang="ts">

    import { goto } from '$app/navigation';
    let searchTerm = ""

    const keyPressed = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            search()
        }
    }

    const search = async () => {
        const response = await fetch(`https://durhack-express.onrender.com/search/${searchTerm}`)
        console.log(response)
        const result = await response.json()
        console.log(result[0].ID)

        //listings/ID
        goto(`/listings/${result[0].ID}`)
    }

</script>
<input class="text-black mx-4 flex-1 rounded-full" bind:value={searchTerm} on:keydown={keyPressed} type="text" placeholder="Search...">
