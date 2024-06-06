// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    ssr: false,
    css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'nuxt-primevue'
    ],
    components: true,
    primevue: {
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
        components: {
            prefix: 'p',
            // include: ['Button', 'DataTable']
        },
        options: {
            unstyled: false
        },

    }

})
