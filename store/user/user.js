export const state = () => ({
    user: []
})

export const actions = {
    async API_USER({ commit }) {
        // const news = await this.$api.$get('articles')
        // console.log(news)
        // commit('SET_USER', news.data.data)
        // return news.data.data
    }
}

export const mutations = {
    SET_USER: (state, news) => {
        state.news = news
    }
}

export const getters = {
    GET_USER(state) {
        return state.news
    }
}
