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
        const result = await response.json()

        if (result) {
            switch (result.labels) {
                case "album":
                    redirect(307, '/music')
                    break;
                case "poster":
                    redirect(307, '/poster')
                    break;
                case "merch":
                    redirect(307, '/merch')
                    break;
            } 
        } else {
            //Small message will pop up 
        }
    }

</script>
<input class="text-black mx-4 flex-1 rounded-full" bind:value={searchTerm} on:keydown={keyPressed} type="text" placeholder="Search Please Please... ">
