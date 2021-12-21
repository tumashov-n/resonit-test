import { mapGetters, mapActions } from 'vuex'
import './news.scss'
export default {
    name: 'News',
    data: () => ({
        urlImages : null
    }),
    created() {
        this.urlImages = process.env.URL_IMAGES
    },
    mounted() {
        this.API_NEWS().then((result) => {
            // console.log(result)
        })
    },
    computed: {
        ...mapGetters('news/news', [
            'GET_NEWS'
        ])
    },
    methods: {
        ...mapActions('news/news', [
            'API_NEWS'
        ])
    }    
}
