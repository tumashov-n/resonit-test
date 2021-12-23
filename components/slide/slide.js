import { mapGetters, mapActions } from 'vuex'
// import VueTinySlider from 'vue-tiny-slider'
// import 'tiny-slider/src/tiny-slider.scss'
import './slide.scss'
export default {
    name: 'Slide',
    data: () => ({
        urlImages : null,
        swiperOptions: {
            spaceBetween: 0,
            speed: 1000,
            effect: 'slide',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }
        }
    }),
    components: { 
        // VueTinySlider 
    },
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
