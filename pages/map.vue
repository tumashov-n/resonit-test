<template>
    <div class="page-subject">
        <ul class="breadcrumbs">
            <li><a href="#">Организации</a></li>
            <li><a href="#">Регионы</a></li>
            <li>Республика Адыгея (Адыгея)</li>
        </ul>
        
        <h1 class="h1">
            Интерактивная карта
        </h1>

        <Map />

        <div class="h1 h1--margin-sm">
            Статистика по Сибирскому Федеральному округу
        </div>

        <RegionStats />
    </div>
</template>

<script>
import Map from '~/components/map/map.vue'
import RegionStats from '~/components/region/region-stats.vue'
export default {    
    name: 'MapPage',
    components: {        
        Map,
        RegionStats
    },
    layout: 'account'
}
</script>
