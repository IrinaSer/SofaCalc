<template lang="pug">
  .result
    h1 Ordering
    pre {{order}}
</template>

<script>
  export default {
    name: "Ordering",
    props: ['order'],
  }
</script>

<style scoped>

</style>
