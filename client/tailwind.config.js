/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#66B6ED',
                'secondary': '#ED9D66',
                'accent': 'e166ed'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

