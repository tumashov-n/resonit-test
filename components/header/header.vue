<template>
    <header class="header">
        <div class="container flex flex-h-between flex-v-center">
            <div class="header-info">
                <div class="header-menu-btn">
                    <div class="header-menu-btn-bars"></div>
                </div>
                <div class="header-logo">
                    <img src="~/static/img/logo.png" alt="Министерство Просвещения">
                </div>
            </div>
            <div class="header-phone">
                Телефон горячей линии
                <a class="header-phone-link" href="tel:88005006070">8-800-500-60-70</a>
            </div>
            <div class="header-login">
                <NuxtLink to="login" class="btn btn--outline">
                    Вход для педагогов
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
<script src="./header.js"></script>
