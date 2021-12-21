<template>
    <section v-if="GET_PARTNERS" class="partner">
        <div class="container">
            <div class="h1">
                Цифровое образование
            </div>

            <div class="partner-list row">
                <div v-for="item in GET_PARTNERS" :key="item.id" class="partner-item">
                    <div>
                        <img :src="`${urlImages}${item.logo}`" :alt="`${item.title}`">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./partners.js"></script>
