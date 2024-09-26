import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'hello'
    },
    mutations: {
        setMessage (state, payload) {
            state.message = payload
        }
    },
    actions: {
        setMessage ({commit}) {
            let message = 'from api';
            commit('setMessage', message)
        }
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
})