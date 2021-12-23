<template>
    <div class="page-subject">
        <ul class="breadcrumbs">
            <li><a href="#">Организации</a></li>
            <li><a href="#">Регионы</a></li>
            <li>Республика Адыгея (Адыгея)</li>
        </ul>
        
        <h1 class="h1">
            Республика Адыгея (Адыгея)
        </h1>

        <RegionStats />

        <div class="org-search">
            <input type="text" class="form-control">
            <button class="org-search-btn btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 19L13.8 13.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="org-list">
            <table class="org-list-table">
                <thead>
                    <tr>
                        <th>Организация</th>
                        <th>Директор</th>
                        <th>Программы</th>
                        <th>Форм заполнено</th>
                        <th>Рейтинг по региону</th>
                        <th>Рейтинг по стране по&nbsp;региону</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Прикамский институт безопасности</td>
                        <td>Чернов Ростислав Иосифович</td>
                        <td>40</td>
                        <td>4/8</td>
                        <td>4/50</td>
                        <td>6/85</td>
                        <td>
                            <div class="org-list-table-dots">
                                &nbsp;
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Адыгейский республиканский институт повышения квалификации</td>
                        <td>Чернов Ростислав Иосифович</td>
                        <td>40</td>
                        <td>4/8</td>
                        <td>4/50</td>
                        <td>6/85</td>
                        <td>
                            <div class="org-list-table-dots">
                                &nbsp;
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Прикамский институт безопасности</td>
                        <td>Чернов Ростислав Иосифович</td>
                        <td>40</td>
                        <td>4/8</td>
                        <td>4/50</td>
                        <td>6/85</td>
                        <td>
                            <div class="org-list-table-dots">
                                &nbsp;
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import RegionStats from '~/components/region/region-stats.vue'
export default {    
    name: 'OrganizationPage',
    components: {
        RegionStats
    },
    layout: 'account'    
}
</script>
