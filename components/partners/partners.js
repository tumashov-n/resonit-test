import { mapGetters, mapActions } from 'vuex'
import './partners.scss'
export default {
    name: 'Partners',
    data: () => ({
        urlImages : null
    }),
    created() {
        this.urlImages = process.env.URL_IMAGES
    },
    mounted() {
        this.API_PARTNERS().then((result) => {
            // console.log(result)
        })
    },
    computed: {
        ...mapGetters('partners/partners', [
            'GET_PARTNERS'
        ])
    },
    methods: {
        ...mapActions('partners/partners', [
            'API_PARTNERS'
        ])
    }    
}
