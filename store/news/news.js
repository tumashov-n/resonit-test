export const state = () => ({
    news: []
})

export const actions = {
    async API_NEWS({ commit }) {
        const news = await this.$api.$get('articles')
        // console.log(news)
        commit('SET_NEWS', news.data.data)
        return news.data.data
    }
}

export const mutations = {
    SET_NEWS: (state, news) => {
        state.news = news
    }
}

export const getters = {
    GET_NEWS(state) {
        return state.news
    }
}
