<template>
    <div class='v-table'>
        <div class='v-table__input-select'>
            <Search 
                @search="searchRow" 
                :filteredValue='filteredValue' 
                @clear-filtered-value="clearFilteredValue"
            />
            <SelectNumberRow @changePerPage='changePerPage'/>
        </div>
         
        <div class='v-table__header'>
            <p>Название</p>
            <p>Символ</p>
        </div>

        <div class='v-table__body' v-if="currencies.length">
            <div class='v_table__row'
                v-for="row in paginatedCurrencies"
                :key="row.id"
            >       
                <div class="row__child">
                    <div class="row row__name">{{row.name}}</div>
                    <div class="row row__symbol">{{row.symbol.toUpperCase()}}</div>
                </div>
            </div>
        </div>

        <div v-else>
            <h1>Загрузка...</h1>
        </div>

        <Pagination @page-click="pageClick" :pages='pages' :pageNumber='pageNumber'/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Search from '../components/Search'
import SelectNumberRow from '../components/SelectNumberRow'
import Pagination from '../components/Pagination'

export default {
  components: {
      SelectNumberRow, Search, Pagination 
  },
  data() {
    return {
        timer: '',
        currenciesPerPage: 10,
        pageNumber: 1,
        filteredValue: ''
    }
  },
  computed: {
    ...mapGetters([
        'currencies'
    ]),
    pages() {
        return Math.ceil(this.filteredList.length / this.currenciesPerPage)
    },
    paginatedCurrencies() {
        let from = (this.pageNumber - 1) * this.currenciesPerPage
        let to = Number(from) + Number(this.currenciesPerPage)

        return this.filteredList.slice(from, to)
    },
    filteredList() {
        const emptyMessage = [{   
                name: "Валюта не найдена",
                symbol: ''
            }
        ]
        const filteredList = this.currencies.filter(curr => {
            return curr.name.toLowerCase().includes(this.filteredValue.toLowerCase()) 
        })
 
        return filteredList.length ? filteredList : emptyMessage
    } 
    },
  methods: {
    ...mapActions([
        'getCurrenciesFromApi'
    ]),
    cancelAutoUpdate() { 
        clearInterval(this.timer)
    },
    pageClick(page) {
        this.pageNumber = page
    },
    changePerPage(value) {
        this.currenciesPerPage = value
        this.pageNumber = 1
    },
    searchRow(value) {
        this.filteredValue = value
    },
    clearFilteredValue() {
        this.filteredValue = ''
    }
    },
    created() {
        this.getCurrenciesFromApi()
        this.timer = setInterval(this.getCurrenciesFromApi, 60000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }    
}
</script>

<style>
.v-table{
    max-width: 900px;
    margin: 0 auto;  
}
.v-table__input-select{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px
}
.v-table__header{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #a8a8a8;
    border-top: 2px solid #a8a8a8;
}
.v-table__header p{
    text-align: left;
    flex-basis: 50%;
}
.row__child{
    display: flex;
    justify-content: space-around;
    background: #ffffff;
}
.row{
    flex-basis: 50%;
    padding: 8px 16px;
    text-align: left;
    border-bottom: .5px solid #f0f0f0;
}

.v-table__body{
    height: 650px;
    overflow: auto;
}
.v-table__body .row__child:nth-child(4){
    background: #1b453f;
}
@media only screen and (max-width: 576px) {
  .v-table__input-select{
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    }
}       
</style>
