<template>
  <div id="app" class="app">
    <div class="container">
      <div class="inner">
          <div class="main-content main-content__filter">
            <SofaCalc></SofaCalc>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SofaCalc from './components/SofaCalc'

export default {
  name: 'app',
  components: {
    SofaCalc
  }
}
</script>

<style lang="scss" src="./global.scss"></style>
