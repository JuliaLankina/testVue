<template>
  <div id="app">
      <Table @set-locale="setLocale"/>

  </div>
</template>

<script>
import Table from './views/Table'

export default {
  components: {
      Table
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
