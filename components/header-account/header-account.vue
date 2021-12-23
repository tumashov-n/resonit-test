<template>
    <header class="header-account">
        <NuxtLink to="/" class="header-account-logo">
            <img src="~/static/img/logo-account.png" alt="Министерство Просвещения">
        </NuxtLink>
        
        <a href="#" class="header-account-link">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20304 14.6667C11.8849 14.6667 14.8697 11.6819 14.8697 8.00004C14.8697 4.31814 11.8849 1.33337 8.20304 1.33337C4.52115 1.33337 1.53638 4.31814 1.53638 8.00004C1.53638 11.6819 4.52115 14.6667 8.20304 14.6667Z" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.53638 8H14.8697" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20304 1.33337C9.87056 3.15894 10.8182 5.52806 10.8697 8.00004C10.8182 10.472 9.87056 12.8411 8.20304 14.6667C6.53552 12.8411 5.58788 10.472 5.53638 8.00004C5.58788 5.52806 6.53552 3.15894 8.20304 1.33337V1.33337Z" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Перейти на сайт
        </a>
        
        <a href="#" class="header-account-link">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.44304 1.33337H10.963L14.8697 5.24004V10.76L10.963 14.6667H5.44304L1.53638 10.76V5.24004L5.44304 1.33337V1.33337Z" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.20312 5.33337V8.00004" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse cx="8.20304" cy="10.6667" rx="0.666667" ry="0.666667" fill="#4F4F4F"/>
            </svg>
            Техническая поддержка
        </a>

        <div class="header-account-user">
            <img src="~/static/img/user.jpg" alt="">
            <div class="header-account-user-name">
                Рудковский А. М.
            </div>
        </div>
        
        <a href="#" class="header-account-notify" title="Уведомления">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.36963 13.1666C1.81734 13.1666 1.36963 13.6143 1.36963 14.1666C1.36963 14.7189 1.81734 15.1666 2.36963 15.1666V13.1666ZM4.86963 7.49996L3.86963 7.49996V7.49996H4.86963ZM16.5363 7.49996L17.5363 7.49996L16.5363 7.49996ZM12.1446 17.5L13.0096 18.0017C13.1891 17.6924 13.1897 17.3107 13.0112 17.0008C12.8327 16.6909 12.5023 16.5 12.1446 16.5V17.5ZM9.2613 17.5V16.5C8.90366 16.5 8.57326 16.6909 8.39476 17.0008C8.21626 17.3107 8.21685 17.6924 8.3963 18.0017L9.2613 17.5ZM19.0363 13.1666H2.36963V15.1666H19.0363V13.1666ZM2.36963 15.1666C4.30263 15.1666 5.86963 13.5996 5.86963 11.6666H3.86963C3.86963 12.4951 3.19806 13.1666 2.36963 13.1666V15.1666ZM5.86963 11.6666V7.49996H3.86963V11.6666H5.86963ZM5.86963 7.49996C5.86963 4.83058 8.03359 2.66663 10.703 2.66663V0.666626C6.92902 0.666626 3.86963 3.72601 3.86963 7.49996L5.86963 7.49996ZM10.703 2.66663C13.3723 2.66663 15.5363 4.83058 15.5363 7.49996L17.5363 7.49996C17.5363 3.72601 14.4769 0.666626 10.703 0.666626V2.66663ZM15.5363 7.49996V11.6666H17.5363V7.49996H15.5363ZM15.5363 11.6666C15.5363 13.5996 17.1033 15.1666 19.0363 15.1666V13.1666C18.2079 13.1666 17.5363 12.4951 17.5363 11.6666H15.5363ZM11.2796 16.9982C11.1604 17.2038 10.9407 17.3303 10.703 17.3303V19.3303C11.6537 19.3303 12.5326 18.8241 13.0096 18.0017L11.2796 16.9982ZM10.703 17.3303C10.4653 17.3303 10.2456 17.2038 10.1263 16.9982L8.3963 18.0017C8.87336 18.8241 9.7522 19.3303 10.703 19.3303V17.3303ZM9.2613 18.5H12.1446V16.5H9.2613V18.5Z"/>
            </svg>
        </a>

        <a href="#" class="header-account-logout" title="Выйти">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0029 5.53333C18.9311 8.46251 18.9306 13.2108 16.0017 16.1393C13.0729 19.0679 8.32458 19.0679 5.39572 16.1393C2.46685 13.2108 2.46634 8.46251 5.39456 5.53333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.7031 1.66663V9.99996" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    </header>
</template>
<script src="./header-account.js"></script> 
