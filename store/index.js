import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import products from './modules/products'
import palettes from './modules/palettes'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    data,
    products,
    palettes
  }
})
