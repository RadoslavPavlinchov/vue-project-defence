import Vue from 'vue'
import Vuex from 'vuex'
import recipes from './modules/recipes'
import user from './modules/user'
import shared from './modules/shared'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        recipes,
        user,
        shared
    }
})
