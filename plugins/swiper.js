import 'swiper/css/swiper.css'
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay, EffectFade } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Navigation, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
