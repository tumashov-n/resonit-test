<template>
    <div>
        <section class="hero">
            <div class="hero-slide">
                <div class="hero-slide-item">
                    <img src="~/static/img/slide.jpg" alt="">
                    <div class="hero-slide-content">
                        <div class="container">
                            <div class="hero-slide-content-title">
                                Субъекты ДПО
                            </div>
                            <div class="hero-slide-content-description">
                                кто отвечает за дополнительное образование в регионах?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Map />

        <section class="system">
            <div class="container">
                <div class="h1 text-center">
                    Единая федеральная система
                </div>
                
                <div class="system-list">
                    <div class="system-item">
                        <img src="~/static/svg/system-1.svg" alt="">
                        <div class="system-item-title">
                            Паспорт ДПО
                        </div>
                        <div class="system-item-description">
                            Актуальная ситуация с системой ДПО регионов
                        </div>
                    </div>
                    <div class="system-item">
                        <img src="~/static/svg/system-2.svg" alt="">
                        <div class="system-item-title">
                            Дневник LMS
                        </div>
                        <div class="system-item-description">
                            Это интернет-среда для взаимодействия учителей, администраторов школ, родителей и учеников!
                        </div>
                    </div>
                    <div class="system-item">
                        <img src="~/static/svg/system-3.svg" alt="">
                        <div class="system-item-title">
                            Реестр
                        </div>
                        <div class="system-item-description">
                            Данные по программам ДПО, реализуемым в регионах Российской Федерации
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="news">
            <div class="container">
                <div class="h1">
                    Новости
                </div>
                <div class="news-list row">
                    <div class="col-4 news-list-col">
                        <div class="news-list-item">
                            <a href="#" class="news-list-item-image">
                                <img src="~/static/img/news-1.jpg" alt="">
                            </a>
                            <div class="news-list-item-date">
                                20.10.2021
                            </div>
                            <div class="news-list-item-title">
                                <a href="#">
                                    На чтениях-2021 пройдет обсуждение проектов смешанного обучения и управлению удаленной работой
                                </a>
                            </div>
                            <div class="news-list-item-description">
                                На Пастуховских чтениях-2021 пройдет обсуждение проектов рекомендаций по организации смешанного обучения и управлению удаленной работой – по формированию системы мотивации научно...
                            </div>
                        </div>
                    </div>

                    <div class="col-4 news-list-col">
                        <div class="news-list-item">
                            <a href="#" class="news-list-item-image">
                                <img src="~/static/img/news-2.jpg" alt="">
                            </a>
                            <div class="news-list-item-date">
                                20.10.2021
                            </div>
                            <div class="news-list-item-title">
                                <a href="#">
                                    Академия Пастухова получила статус Федеральной инновационной площадки
                                </a>
                            </div>
                            <div class="news-list-item-description">
                                Член Союза ДПО ФГБОУ «Государственная академия промышленного менеджмента имени Н.П. Пастухова» приказом Министерства науки и высшего образования Российской Федерации от 25 декабря 2020 г. № 1580 признана федеральной инновац...
                            </div>
                        </div>
                    </div>

                    <div class="col-4 news-list-col">
                        <div class="news-list-item">
                            <a href="#" class="news-list-item-image">
                                <img src="~/static/img/news-3.jpg" alt="">
                            </a>
                            <div class="news-list-item-date">
                                20.10.2021
                            </div>
                            <div class="news-list-item-title">
                                <a href="#">
                                    Об изменениях правил заполнения шаблонов ФИС ФРДО
                                </a>
                            </div>
                            <div class="news-list-item-description">
                                Рособрнадзор России опубликовал важную информацию: Уважаемые пользователи федеральной информационной системы «Федеральный реестр сведений о документах об образовании и (или) о квалификации, документах...
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" class="btn">Посмотреть все новости</a>
            </div>
        </section>

        <section class="partner">
            <div class="container">
                <div class="h1">
                    Цифровое образование
                </div>

                <div class="partner-list row">
                    <div class="partner-item">
                        <a href="#" target="_blank">
                            <img src="~/static/img/partners/partner-1.png" alt="">
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#" target="_blank">
                            <img src="~/static/img/partners/partner-2.png" alt="">
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#" target="_blank">
                            <img src="~/static/img/partners/partner-3.png" alt="">
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#" target="_blank">
                            <img src="~/static/img/partners/partner-4.png" alt="">
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#" target="_blank">
                            <img src="~/static/img/partners/partner-5.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Map from '~/components/map/map.vue'
export default {
    name: 'IndexPage',
    components: {
        Map
    },
    layout: 'default'
}
</script>
