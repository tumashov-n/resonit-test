<template>
    <section v-if="GET_NEWS" class="news">
        <div class="container">
            <div class="h1">
                Новости
            </div>
            <div class="news-list row">     
                <div v-for="item in GET_NEWS" :key="item.id" class="col-4 news-list-col">
                    <div class="news-list-item">
                        <a href="#" class="news-list-item-image">
                            <img :src="`${urlImages}${item.preview_image}`" alt="">
                        </a>
                        <div class="news-list-item-date">
                            {{ item.created_at | date }}
                        </div>
                        <div class="news-list-item-title">
                            <a href="#">
                                {{ item.title }}
                            </a>
                        </div>
                        <div class="news-list-item-description">
                            {{ item.preview_text }}
                        </div>
                    </div>
                </div>    
            </div>
            <a href="#" class="btn">Посмотреть все новости</a>
        </div>
    </section>
</template>
<script src="./news.js"></script>
