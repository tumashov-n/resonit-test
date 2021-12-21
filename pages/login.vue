<template>
    <div class="auth">
        <h1 class="h1 h1--margin-lg">
            Авторизация
        </h1>

        <form class="auth-form" @submit.prevent="userLogin">
            <div class="form-group">
                <div class="form-group-title">
                    E-mail
                </div>
                <input type="text" class="form-control" v-model="form.email">
            </div>
            <div class="form-group">
                <div class="form-group-title">
                    Пароль
                </div>
                <input type="text" class="form-control" v-model="form.password">
                <!-- div class="form-group-error-text">
                    Логин или пароль введены неверно.
                </div -->
            </div>
            <div class="auth-form-buttons">
                <button class="btn" type="submit">
                    Авторизоваться
                </button>
                <a href="#" class="auth-form-buttons-link">Войти с помощью oauth 2.0</a>
            </div>
        </form>

        <div class="auth-help">
            Если возникли проблемы со входом обратитесь в <a href="#" class="u">Службу поддержки</a>
        </div>
    </div>
</template>

<script>
import UserIdStorageService from '~/services/user-id-services.js'
export default {
    auth: 'guest',
    // middleware: 'guest',
    name: 'LoginPage',
    layout: 'default',
    data: () => ({
        form: {
            email: 'tech@efs-app.local',
            password: 'pa$$w0rd'
        }   
    }),
    mounted() {
        // console.log(this.$auth.loggedIn)
    },
    methods: {
        async userLogin() {
            try {
                const response = await this.$auth.loginWith('local', { data: this.form })
                this.$auth.setUser(response.data.data);
                UserIdStorageService.set(response.data.data.id)
            } catch (err) {
                console.log(err)
            }
        }
    }
}

</script>
