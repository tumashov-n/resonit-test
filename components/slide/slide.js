import { mapGetters, mapActions } from 'vuex'
import './slide.scss'
export default {
    name: 'Slide',
    data: () => ({
        urlImages : null
    }),
    created() {
        this.urlImages = process.env.URL_IMAGES
    },
    mounted() {
        this.API_SLIDES().then((result) => {
            // console.log(result)
        });
    },
    computed: {
        ...mapGetters('slides/slides', [
            'GET_SLIDES'
        ])
    },
    methods: {
        ...mapActions('slides/slides', [
            'API_SLIDES'
        ])
    }    
}
