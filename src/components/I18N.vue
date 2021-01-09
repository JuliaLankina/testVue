<template>
<select v-model="localLanguage">
    <option  
        v-for="(lang, i) in languages" 
        :key="`${lang}` + i"
    >
        {{lang}}
    </option>
</select>
</template>

<script>
export default {
    data() {
        return {
            languages: {
                ru: 'ru',
                us: 'us',
                fr: 'fr',
            },
            localLanguage: 'us',
        }
    },
    watch: {
        localLanguage() {
            this.$emit('set-locale', this.localLanguage)
        }
    }
}
</script>

<style>
select:focus{
    outline: none;
}
</style>