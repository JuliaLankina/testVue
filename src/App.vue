<template>
    <div id="app">
          <router-view />
          <I18N @set-locale="setLocale"/>
    </div>
</template>

<script>
import I18N from '@/components/I18N'
export default {
    components: {
        I18N
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
