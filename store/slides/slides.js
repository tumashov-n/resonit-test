export const state = () => ({
    slides: []
})

export const actions = {
    async API_SLIDES({ commit }) {
        const slides = await this.$api.$get('ads')
        // console.log(slides);
        commit('SET_SLIDES', slides.data)
        return slides.data
    }
}

export const mutations = {
    SET_SLIDES: (state, slides) => {
        state.slides = slides
    }
}

export const getters = {
    GET_SLIDES(state) {
        return state.slides
    }
}
