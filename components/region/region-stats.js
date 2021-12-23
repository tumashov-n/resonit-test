import { mapGetters, mapActions } from 'vuex'
import './region-stats.scss'
export default {
    name: 'RegionStats',
    data: () => ({
        urlImages : null,
        regionId: 1
    }),
    created() {
        this.urlImages = process.env.URL_IMAGES
    },
    mounted() {
        this.API_REGIONSTATS(this.regionId).then((result) => {
            // console.log(result)
        })
    },
    computed: {
        ...mapGetters('region/region-stats', [
            'GET_REGIONSTATS'
        ])
    },
    methods: {
        ...mapActions('region/region-stats', [
            'API_REGIONSTATS'
        ])
    }    
}
