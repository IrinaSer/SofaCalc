export default {
  state: {
    sofas: [
      {
        id: 17448,
        name: 'Атлантик 2р Madras Grass',
        pic: '../img/img-0.png',
        size: '1800 см x 960 см',
        price: 40000,
        types: ['Все', 'Прямые диваны', 'Диваны для гостиной', 'Кожаные диваны', 'Диваны на заказ'],
        styles: ['Все', 'Модерн', 'Классический']
      },
      {
        id: 17758,
        name: 'Атлантик Bellagio Lama',
        pic: '../img/img-1.png',
        size: '1170 см x 960 см',
        price: 17500,
        types: ['Все', 'Мягкие кресла'],
        styles: ['Все', 'Классический', 'Современный']
      },
      {
        id: 17768,
        name: 'Барселона 3 р ',
        pic: '../img/img-2.png',
        size: '2020 см x 780 см',
        price: 45800,
        types: ['Все', 'Прямые диваны', 'Диваны для гостиной', 'Маленькие диваны', 'Диваны в гостиную в современном стиле', 'Диваны на заказ'],
        styles: ['Все', 'Хай-тек', 'Современный']
      },
      {
        id: 17778,
        name: 'Берг 2 р Venzo soft col13',
        pic: '../img/img-3.png',
        size: '1490 см x 1020 см',
        price: 34500,
        types: ['Все', 'Прямые диваны', 'Диваны для гостиной', 'Диваны в гостиную в современном стиле'],
        styles: ['Все', 'Модерн', 'Классический']
      },
      {
        id: 17788,
        name: 'Бонн с канапе Aquarelle 69',
        pic: '../img/img-4.png',
        size: '2260 см x 1040 см',
        price: 58300,
        types: ['Все', 'Угловые диваны', 'Синие диваны', 'Диваны для гостиной', 'Маленькие диваны', 'Диваны в гостиную в современном стиле', 'Угловые диваны-кровати', 'Диваны на заказ'],
        styles: ['Все', 'Хай-тек', 'Современный']
      }
    ]
  },
  mutations: {
  },
  getters: {
    products(state) {
      return state.sofas
    }
  },
  actions: {}
}
