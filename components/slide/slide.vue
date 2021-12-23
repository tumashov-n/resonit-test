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
            </swiper>
            <div slot="navigation" class="swiper-navigation">
                <div class="slide-nav slide-nav-prev">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.333 20L6.66636 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.667 30L6.66699 20L16.667 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="slide-nav slide-nav-next">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66699 20H33.3336" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.333 10L33.333 20L23.333 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./slide.js"></script>
