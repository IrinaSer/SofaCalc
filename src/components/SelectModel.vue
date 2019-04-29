<template lang="pug">
  .sofa-filter
    .sofa-filter__options
      .sofa-filter__label
        span.sofa-filter__label-title Тип модели
        select.sofa-filter__select(
          v-model="selectType"
          @change="resetSelected")
          option(
            v-for="(type, key) in sofaTypes"
            :key="key"
            :value="type") {{ type }}
      .sofa-filter__label
        span.sofa-filter__label-title Стиль
        select.sofa-filter__select(
          v-model="selectStyle"
          @change="resetSelected")
          option(v-for="(style, key) in sofaStyles"
            :key="key"
            :value="style") {{ style }}
    vue-custom-scrollbar.sofa-filter__products-wrap
      .sofa-filter__products(v-if="showProducts")
        .sofa-filter__product(
          v-for="(item, key) in showProducts"
          :key="key"
          :class="(selected.id === item.id) ? 'select' : ''"
          @click="userSelect(item)")
          .sofa-filter__product-pic
            img(:src="item.pic" :alt="item.name")
          .sofa-filter__product-name {{ item.name }}
          .sofa-filter__product-size {{ item.size }}
          .sofa-filter__product-price {{ item.price }} руб.
      div(v-else)
        p По Вашему запросу ничего не найдено
    .sofa-filter__next-step(v-show="selected.name !== ''")
      a(href="#" @click="nextStep").sofa-filter__btn Выбрать обивку
</template>

<script>
  export default {
    props: ['products', 'selected'],
    data() {
      return {
        selectType: 'Все',
        selectStyle: 'Все',
      }
    },
    computed: {
      sofaTypes: function () {
        let arr = [];
        this.products.forEach(item => {
          arr.push(...item.types);
        });
        return arr = arr.filter((elem,i) => arr.indexOf(elem) === i);
      },
      sofaStyles: function () {
        let arr = [];
        this.products.forEach(item => {
          arr.push(...item.styles);
        });
        return arr = arr.filter((elem,i) => arr.indexOf(elem) === i);
      },
      showProducts: function () {
        let result = this.products.filter(item => item.types.includes(this.selectType) && item.styles.includes(this.selectStyle));
        if (result.length > 0) {
          return result;
        }
        return false;
      }
    },
    methods: {
      userSelect: function (item) {
        this.$store.commit('updateSofa', item);
      },
      resetSelected: function () {
        this.$store.commit('resetOrder');
      },
      nextStep: function () {
        this.$emit('next');
      }
    }
  }
</script>

<style scoped lang="scss">
  .sofa-filter {
    &__label {
      width: 20%;
      padding-right: 20px;
      &-title {
        display: block;
        margin-bottom: 15px;
        color: #97a2a5;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .6px;
      }
    }
    &__select {
      display: block;
      max-width: 100%;
    }
    &__products {
      &-wrap {
        position: relative;
        margin: 0;
        height: 45vh;
      }
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }
    &__product {
      width: calc(100% / 4 - 26px);
      margin: 10px;
      padding: 10px;
      border: 3px solid transparent;
      &.select {
        border: 3px solid #65cce7;
      }
      &-pic {
        display: block;
        img {
          display: block;
          max-width: 100%;
          margin: auto;
        }
      }
      &-name {
        color: #242829;
        font-size: 14px;
        font-weight: 500;
      }
      &-size {
        color: #2d3439;
        font-size: 12px;
        font-weight: 300;
        margin: 5px 0 10px 0;
      }
      &-price {
        color: #111;
        font-size: 18px;
        font-weight: 700;
      }
    }
    &__next-step {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-box-shadow: 0 -5px 9px rgba(0, 0, 0, 0.22);
      box-shadow: 0 -5px 9px rgba(0, 0, 0, 0.22);
      background-color: #f6f8f8;
      text-align: center;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9;
    }
  }
</style>
