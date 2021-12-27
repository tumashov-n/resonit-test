// import { LocalStorageService } from '~/services/local-storage-service'
export const state = () => ({
    userInfo: []
})

export const actions = {
    async API_USERINFO({ commit }) {
        // const userId = LocalStorageService.getItem('userId')
        // const userInfo = await this.$api.$get('users/' + userId)
        // console.log(userInfo)
        // commit('SET_USERINFO', userInfo.data.data)
        // return userInfo.data.data
    }
}

export const mutations = {
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo
    }
}

export const getters = {
    GET_USERINFO(state) {
        return state.userInfo
    }
}
