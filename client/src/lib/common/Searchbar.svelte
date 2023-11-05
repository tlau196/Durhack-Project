<script lang="ts">
    import { redirect } from '@sveltejs/kit';
    let searchTerm = ""

    const keyPressed = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            search()
        }
    }
    const search = async () => {
        const response = await fetch(`http://localhost:5000/prod/search/${searchTerm}`)
        console.log(response)
        const result = await response.json()
        console.log(result[0].ID)

        //listings/ID
        throw redirect(302, `/music`)
    }

</script>
<input class="text-black mx-4 flex-1 rounded-full" bind:value={searchTerm} on:keydown={keyPressed} type="text" placeholder="Search Please Please... ">
