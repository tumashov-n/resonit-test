<template>
    <aside class="account-sidebar" :class="sidebarState"> 
        <div class="sidebar-content">
            <div class="account-sidebar-toggle" @click="sidebarToggle">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7041 17L6.7041 12L11.7041 7" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.7041 17L13.7041 12L18.7041 7" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </div>
            <ul class="account-sidebar-menu">
                <li>
                    <NuxtLink to="organization">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.87109 7.83338C1.87109 6.72881 2.76652 5.83337 3.87109 5.83337H16.5378C17.6423 5.83337 18.5378 6.7288 18.5378 7.83337V15.5C18.5378 16.6046 17.6423 17.5 16.5378 17.5H3.87109C2.76652 17.5 1.87109 16.6046 1.87109 15.5V7.83338Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.5378 17.5V4.16667C13.5378 3.24619 12.7916 2.5 11.8711 2.5H8.53776C7.61729 2.5 6.87109 3.24619 6.87109 4.16667V17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Организация</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="subject">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3704 5L11.4538 12.9167L7.28711 8.75L1.03711 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.3711 5H19.3711V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Отчеты</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="map">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.03711 4.99996V18.3333L6.87044 15L13.5371 18.3333L19.3704 15V1.66663L13.5371 4.99996L6.87044 1.66663L1.03711 4.99996Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87109 1.66663V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.5371 5V18.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Карта</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script src="./account-sidebar.js"></script>
