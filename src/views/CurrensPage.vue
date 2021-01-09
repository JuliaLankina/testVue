<template>
    <div>
        <img 
            v-if="setImgUrl(currensArr.name)"
            :src="setImgUrl(currensArr.name)"
            :alt="currensArr.name"
            class='img-class'
        >
        <h1 class="bottom">  
            {{$t('table.columnName')}}: {{currensArr.name}}
        </h1>
        <h1 class="bottom">  
            {{$t('table.columnSymbol')}}: {{currensArr.symbol}}
        </h1>
        <h1 
            class="bottom"
            v-if="setSiteCurrensUrl"
        >
            {{$t('table.site')}}: 
            <a  
                :href="setSiteCurrensUrl" 
                target="_blank"
                class='website'
            >  
                {{currensArr.name}}
            </a>
        </h1>
    </div>     
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapGetters([
            'getOneCurrens'
        ]),
        currensArr() {
            return this.getOneCurrens(this.id)
        },
        setSiteCurrensUrl() {
            try {
                let re = this.currensArr.address_explorer.split('/')
                return re[0] + '//' + re[2]
            }
            catch(e) {
                return 0
            }
            
        }
    },
    methods: {
        ...mapActions([
            'getCurrenciesFromApi'
        ]),
    },
    mounted() {
        this.getCurrenciesFromApi()
    },
}
</script>

<style>
.website{
    color: black;
}
.bottom:not(:last-child){
    border-bottom: .5px solid black;
}
.bottom {
    padding-bottom: 10px;
    text-align: left;
}
.img-class{
    width: 64px;
}
</style>