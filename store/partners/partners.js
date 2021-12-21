export const state = () => ({
    partners: []
})

export const actions = {
    async API_PARTNERS({ commit }) {
        const partners = await this.$api.$get('partners')
        // console.log(news)
        commit('SET_PARTNERS', partners.data.data)
        return partners.data.data
    }
}

export const mutations = {
    SET_PARTNERS: (state, partners) => {
        state.partners = partners
    }
}

export const getters = {
    GET_PARTNERS(state) {
        return state.partners
    }
}
