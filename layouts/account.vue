<template>
    <div class="app">
        <div class="page">
            <div>
                <HeaderAccount />
                <Nuxt />
            </div>
            <FooterDefault />
        </div>
    </div>
</template>

<script>
import HeaderAccount from '~/components/header-account/header-account.vue'
import FooterDefault from '~/components/footer/footer.vue'
export default {
    name: 'AccountLayout',
    components: {
        HeaderAccount, 
        FooterDefault
    }
}

</script>
