<template>
    <div>      
        <client-only>
            <Slide />
        </client-only>
        
        <section class="map-home">
            <div class="container">
                <div class="h1 text-center">
                    Информация по регионам
                </div>
                <Map />
            </div>
        </section>

        <section class="system">
            <div class="container">
                <div class="h1 text-center">
                    Единая федеральная система
                </div>
                
                <div class="system-list">
                    <div class="system-item">
                        <img src="~/static/svg/system-1.svg" alt="">
                        <div class="system-item-title">
                            Паспорт ДПО
                        </div>
                        <div class="system-item-description">
                            Актуальная ситуация с системой ДПО регионов
                        </div>
                    </div>
                    <div class="system-item">
                        <img src="~/static/svg/system-2.svg" alt="">
                        <div class="system-item-title">
                            Дневник LMS
                        </div>
                        <div class="system-item-description">
                            Это интернет-среда для взаимодействия учителей, администраторов школ, родителей и учеников!
                        </div>
                    </div>
                    <div class="system-item">
                        <img src="~/static/svg/system-3.svg" alt="">
                        <div class="system-item-title">
                            Реестр
                        </div>
                        <div class="system-item-description">
                            Данные по программам ДПО, реализуемым в регионах Российской Федерации
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <News />
        <Partners />
    </div>
</template>

<script>
import Slide from '~/components/slide/slide.vue'
import Map from '~/components/map/map.vue'
import News from '~/components/news/news.vue'
import Partners from '~/components/partners/partners.vue'
export default {
    auth: false,
    name: 'IndexPage',
    components: {
        Slide,
        Map,
        News,
        Partners
    },
    layout: 'default'
}
</script>
