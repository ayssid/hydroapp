import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VTextField,
  VAlert
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VTextField,
    VAlert
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAyosXajj48WZbc1C7S2cK2-cQ3_W9JM5g',
      authDomain: 'hydroapp-d2ed3.firebaseapp.com',
      databaseURL: 'https://hydroapp-d2ed3.firebaseio.com',
      projectId: 'hydroapp-d2ed3',
      storageBucket: '',
      messagingSenderId: '363524083335'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
