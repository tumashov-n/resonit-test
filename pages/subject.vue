<template>
    <div class="auth">
        <h1 class="h1 h1--margin-lg">
            Авторизация
        </h1>
        <div class="auth-form">
            <div class="form-group">
                <div class="form-group-title">
                    Имя пользователя
                </div>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <div class="form-group-title">
                    Пароль
                </div>
                <input type="text" class="form-control">
                <div class="form-group-error-text">
                    Логин или пароль введены неверно.
                </div>
            </div>
            <div class="auth-form-buttons">
                <button class="btn">
                    Авторизоваться
                </button>
                <a href="#" class="auth-form-buttons-link">Войти с помощью oauth 2.0</a>
            </div>
        </div>

        <div class="auth-help">
            Если возникли проблемы со входом обратитесь в <a href="#" class="u">Службу поддержки</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubjectPage',
    layout: 'account' 
}
</script>
