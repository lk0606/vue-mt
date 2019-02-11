/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as ls from '@/utils/ls'
export default new Vuex.Store({
  state: {
    phoneNum: ''
  },
  mutations: {
    SAVEPHONE (state, phoneNum) {
      // ls.setItem('phoneNum', phoneNum)
      state.phoneNum = ls.getItem('phoneNum').toString()
      let s = state.phoneNum
      console.log(s)
    }
  },
  actions: {

  },
  getters: {
    storePhoneNum: state => state.phoneNum
  }
})
