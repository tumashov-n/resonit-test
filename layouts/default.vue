<template>
    <div class="app">
        <div class="page">
            <div>
                <HeaderDefault />
                <Nuxt />
            </div>
            <FooterDefault />
        </div>
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
