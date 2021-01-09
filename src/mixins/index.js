import Vue from 'vue'

export const urlMixin = Vue.mixin({
    methods: {
        setImgUrl(nameImg) {
            try {
                return require(`@/assets/downloads/${nameImg.toLowerCase().replace(/ /g, '-')}.png`)
            }
            catch (e) {
                return 0
            }   
        }
    }
})