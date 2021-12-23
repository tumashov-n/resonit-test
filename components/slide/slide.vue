<template>
    <section v-if="GET_SLIDES" class="hero">
        <div class="hero-slide">
            <swiper ref="WizardSliderSwiper" :options="swiperOptions">
                <swiper-slide v-for="(slide, index) in GET_SLIDES" :key="slide.id" :ref="'slide-' + index" :data-id="slide.id" class="hero-slide-item">
                    <img :src="`${urlImages}${slide.image}`" :alt="`${slide.title}`">
                    <div class="hero-slide-content">
                        <div class="container">
                            <div class="hero-slide-content-title">
                                {{ slide.title }}
                            </div>
                            <div class="hero-slide-content-description">
                                кто отвечает за дополнительное образование в регионах?
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div slot="pagination" class="swiper-pagination" />
            </swiper>
        </div>
    </section>
</template>
<script src="./slide.js"></script>
