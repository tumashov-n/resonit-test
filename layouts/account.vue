<template>
    <div class="app">
        <div class="page">
            <HeaderAccount />
            <div class="account-container">                
                <AccountSidebar />
                <div class="account-content">
                    <div>
                        <Nuxt />
                    </div>
                    <FooterAccount />
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import HeaderAccount from '~/components/header-account/header-account.vue'
import FooterAccount from '~/components/footer-account/footer-account.vue'
import AccountSidebar from '~/components/account-sidebar/account-sidebar.vue'
export default {
    name: 'AccountLayout',
    components: {
        HeaderAccount, 
        FooterAccount,
        AccountSidebar
    }
}

</script>
