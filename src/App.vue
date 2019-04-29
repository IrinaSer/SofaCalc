<template lang="pug">
  #app.app
    .container
      .inner
        .main-content.main-content__filter
          SofaCalc
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
