export default {
  state: {
    order: {}
  },
  mutations: {
    createOrder(state, payload) {
      state.order = payload
    },
    resetOrder(state) {
      for (let key in state.order) {
        state.order[key] = ''
      }
    },
    updateMainColor(state, payload) {
      state.order.selectMainColor = payload
    },
    updateCompanionColor(state, payload) {
      state.order.selectCompanionColor = payload
    },
    updateSofa(state, payload) {
      state.order.id = payload.id,
      state.order.name = payload.name,
      state.order.size = payload.size,
      state.order.price = payload.price
    },
    addToBasket(state, price) {
      state.order.price = price
    }
  },
  getters: {
    order(state) {
      return state.order
    }
  },
  actions: {}
}
