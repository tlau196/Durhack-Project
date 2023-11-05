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
                'secondary': '#6673ED',
                'accent': 'e166ed',
                'acceptable-gray':'#777',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

