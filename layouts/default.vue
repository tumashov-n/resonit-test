<template>
    <div class="app">
        <HeaderDefault />
        <Nuxt />
        <FooterDefault />
    </div>
</template>

<script>
import HeaderDefault from '~/components/header/header.vue'
import FooterDefault from '~/components/footer/footer.vue'
export default {
    name: 'DefaultLayout',
    components: {
        HeaderDefault, 
        FooterDefault
    }
}
 
</script>
