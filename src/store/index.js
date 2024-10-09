import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from './example'
import notes from './notes'

export default new Vuex.Store({
    modules: {
        example,
        notes
    }
})