export const state = () => ({
    regionStats: []
})

export const actions = {
    async API_REGIONSTATS({ commit }, regionId) {
        const regionStats = await this.$api.$get('regions/' + regionId + '/stats')
        // console.log(regionStats)
        commit('SET_REGIONSTATS', regionStats.data)
        return regionStats.data
    }
}

export const mutations = {
    SET_REGIONSTATS: (state, regionStats) => {
        state.regionStats = regionStats
    }
}

export const getters = {
    GET_REGIONSTATS(state) {
        return state.regionStats
    }
} 
