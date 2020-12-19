<template>
        <div class='v-select'>
            <label>{{$t('select.showBy')}}: </label>
            <select v-model="currenciesPerPage" @change="changeCurrenciesPerPage()">
                <option value="" selected disabled hidden>{{$t('select.select')}}</option>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>  
</template>

<script>
export default {
    data() {
        return {
            currenciesPerPage: ''
        }
    },
    methods: {
        changeCurrenciesPerPage() {
            this.$emit('changePerPage', this.currenciesPerPage)
        }
    }   
}
  
</script>

<style scoped>
.v-select {
    display: flex;
}
.v-select p{
    margin: 0;
    margin-right: 5px;
}
.v-select select:focus{
    outline: none;
}
.v-select select{
    outline: none;
}

</style>
