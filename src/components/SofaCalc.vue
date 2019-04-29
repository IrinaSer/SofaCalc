<template lang="pug">
  .main-content__filter-inner
    h1 Конструктор диванов
    ul.sofa-filter__nav
      li.sofa-filter__nav-item(
        :class="this.stepOne ? 'active' : this.stepTwo || this.stepThree ? 'back' : ''"
        @click="goBackToStepOne") Выбор модели
      li.sofa-filter__nav-item(
        :class="this.stepTwo ? 'active' : this.stepThree ? 'back' : ''"
        @click="goBackToStepTwo") Выбор обивки
      li.sofa-filter__nav-item(:class="this.stepThree ? 'active' : ''") Оформление заказа
    slot(v-if="this.stepOne")
      SelectModel(
        :products="products"
        :selected="order"
        @next="goToStepTwo"
      )
    slot(v-else-if="this.stepTwo")
      SelectColor(
        :selectProduct="order"
        :palettes="palettes"
        @next="goToStepThree"
      )
    slot(v-else)
      Ordering(:order="order")
</template>

<script>
  class Order {
    constructor(id, name, size, price) {
      this.id = id
      this.name = name
      this.size = size
      this.price = price
      this.selectMainColor = {}
      this.selectCompanionColor = {}
    }
  }

  import SelectModel from '../components/SelectModel'
  import SelectColor from '../components/SelectColor'
  import Ordering from '../components/Ordering'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      SelectModel,
      SelectColor,
      Ordering
    },
    data() {
      return {
        stepOne: true,
        stepTwo: false,
        stepThree: false
      }
    },
    computed: {
      ...mapGetters({
        products: 'products',
        selected: 'selected',
        palettes: 'palettes',
        order: 'order'
      })
    },
    methods: {
      goBackToStepOne: function () {
        this.stepOne = true;
        this.stepTwo = false;
        this.stepThree = false;
        this.$store.commit('resetOrder');
      },
      goBackToStepTwo: function () {
        if (this.stepThree) {
          this.goToStepTwo();
        }
      },
      goToStepTwo: function () {
        this.stepOne = false;
        this.stepTwo = true;
        this.stepThree = false;
      },
      goToStepThree: function () {
        this.stepOne = false;
        this.stepTwo = false;
        this.stepThree = true;
      }
    },
    created: function () {
      const productToOrder = new Order('','');
      this.$store.commit('createOrder', productToOrder);
    }
  }
</script>

<style lang="scss">
  .sofa-filter {
    &__nav {
      display: flex;
      max-width: 100%;
      list-style: none;
      padding-left: 0;
      &-item {
        display: block;
        width: 25%;
        text-align: center;
        color: #97a2a5;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.1px;
        padding: 17px 0;
        position: relative;
        &.active {
          background-color: #0798bf;
          color: #fff;
        }
        &.back {
          cursor: pointer;
        }
      }
    }
    &__options {
      display: flex;
    }
  }
</style>
