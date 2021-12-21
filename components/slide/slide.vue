<template>
    <section v-if="GET_SLIDES" class="hero">
        <div class="hero-slide">
            <div v-for="item in GET_SLIDES" :key="item.id" class="hero-slide-item">
                <img :src="`${urlImages}${item.image}`" :alt="`${item.title}`">
                <div class="hero-slide-content">
                    <div class="container">
                        <div class="hero-slide-content-title">
                            {{ item.title }}
                        </div>
                        <div class="hero-slide-content-description">
                            кто отвечает за дополнительное образование в регионах?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./slide.js"></script>
