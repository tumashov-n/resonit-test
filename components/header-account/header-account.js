// import { mapGetters, mapActions } from 'vuex'
import './header-account.scss'
export default {
    name: 'HeaderAccount',
    data: () => ({
        // userName : null
    }),
    created() {
        // this.userName = process.env.URL_IMAGES
    },
    mounted() {
        /* this.API_USERINFO().then((result) => {
            console.log(result)
        }) */
    },
    computed: {
        /* ...mapGetters('user/userinfo', [
            'GET_USERINFO'
        ]) */
    },
    methods: {
        /* ...mapActions('user/userinfo', [
            'API_USERINFO'
        ]) */
    }
}
