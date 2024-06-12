/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                input: '#1F2937',
                background: '#f3f4f6',
                textfield: '#f3f4f6',
                card: '#ffffff',
                highlight: '#22c55e',
                button: '#111827',
                destructive: '#111827',
                destructivetext: '#d7d8de',
                text: '#1F2937',
                sidebar: '#111827',
                header: '#030712',
                landing: '#111827',
            }
        },
        plugins: [],
    }
}
