export default {
  state: {
    palettes: {
      cloth: {
        text: 'Ткань',
        collections: [
          {
            name: 'Melody',
            type: 'Ткань',
            groupPrice: 34290,
            colors: [
              {
                name: 'Aurora',
                pic: '../img/Mirage aurora.jpg'
              }
            ]
          }
        ]
      },
      leather: {
        text: 'Кожа+иск. кожа',
        collections: [
          {
            name: 'Madras 1',
            type: 'Кожа+иск. кожа',
            groupPrice: 54290,
            colors: [
              {
                name: 'Rozetta',
                pic: '../img/rozetta.jpg'
              },
              {
                name: 'Luna',
                pic: '../img/Luna.jpg'
              }
            ]
          },
          {
            name: 'Lama',
            type: 'Кожа+иск. кожа',
            groupPrice: 24290,
            colors: [
              {
                name: 'Lama',
                pic: '../img/Lama.jpg'
              }
            ]
          },
          {
            name: 'Madras bicolor',
            type: 'Кожа+иск. кожа',
            groupPrice: 52290,
            colors: [
              {
                name: 'Grass',
                pic: '../img/grass.jpg'
              }
            ]
          }
        ]
      },
      leather100: {
        text: 'Кожа',
        collections: [
          {
            name: 'Madras 100%',
            type: 'Кожа',
            groupPrice: 74290,
            colors: [
              {
                name: 'Rozetta',
                pic: '../img/rozetta.jpg'
              },
              {
                name: 'Luna',
                pic: '../img/Luna.jpg'
              },
              {
                name: 'Phistachio',
                pic: '../img/phistachio.jpg'
              }
            ]
          }
        ]
      }
    }
  },
  mutations: {},
  getters: {
    palettes(state) {
      return state.palettes
    }
  },
  actions: {}
}
