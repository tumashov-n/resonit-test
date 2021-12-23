<template>
    <div v-if="GET_REGIONSTATS" class="region-stats row">
        <div v-for="item in GET_REGIONSTATS" :key="item.code" class="col-3">
            <div class="region-stats-item">
                {{ item.title }}
                <span>
                    {{ item.value }}
                </span>
            </div>
        </div>
    </div>
</template>
<script src="./region-stats.js"></script>
