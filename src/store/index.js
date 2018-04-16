import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './module/auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    AuthStore
  }
})
