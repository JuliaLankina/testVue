<template>
    <div class='v-table'>
        <div class='v-table__input-select'>   
            <Search 
                @search="searchRow" 
                :filteredValue="filteredValue"
                :placeholderForSearch="placeholderForSearch()"
                @clear-filtered-value="clearFilteredValue"
            />
            <SelectNumberRow 
                @changePerPage='changePerPage'
            >
                {{$t('select.showBy')}}:
            </SelectNumberRow>
        </div>
         
        <div class='v-table__header'>
            <p>
               {{$t('table.columnName')}}
            </p>
            <p>
               {{$t('table.columnSymbol')}}
            </p>
        </div>

        <div 
            class='v-table__body' 
            v-if="currencies.length"
        >
            <router-link
                class='v_table__row'
                v-for="(row, i) in paginatedCurrencies"
                :key="`${row.name} - ${i}`"
                :to="{name: `currens`, params: {id: row.symbol}}" 
            >   
                <div class="row__child">
                    <div class="row">
                    <img 
                        v-if="setImgUrl(row.name)"
                        :src="setImgUrl(row.name)"
                        :alt="row.name"
                    >
                        {{row.name}}
                    </div>
                    <div class="row">
                        {{row.symbol.toUpperCase()}}
                    </div>
                </div>
            </router-link>
        </div>
        <div v-else>
            <h3>
                {{$t('table.loading')}}...
            </h3>
            <Loader/>
        </div>
        <Pagination 
            @page-click="pageClick" 
            :pages='pages' 
            :pageNumber='pageNumber'
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { urlMixin } from '@/mixins'
import Search from '@/components/Search'
import SelectNumberRow from '@/components/SelectNumberRow'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'

export default {
    components: {
        SelectNumberRow, 
        Search, 
        Pagination, 
        Loader
    },
    mixins: [
        urlMixin
    ],
    data() {
        return {
            timer: '',
            currenciesPerPage: 10,
            pageNumber: 1,
            filteredValue: '',
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
                    name: this.$t('table.emptyMessage'),
                    symbol: ''
                }
            ]
            const filteredList = this.currencies.filter(curr => {
                return curr.name.toLowerCase().startsWith(this.filteredValue.toLowerCase()) 
            })
    
            return filteredList.length ? filteredList : emptyMessage
        },
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
        },
        placeholderForSearch() {
            if (this.currencies) {
                return this.currencies[1].name
            }           
        },
    },
    mounted() {
        this.getCurrenciesFromApi()
        this.timer = setInterval(this.getCurrenciesFromApi, 60000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },   
}
</script>

<style>
.v-table{
    margin-top: 30px;
    max-width: 900px;
    min-width: 400px;
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
.row__child:hover{
    background-color: #ccc
}

.row{
    flex-basis: 50%;
    padding: 8px 16px;
    text-align: left;
    border-bottom: .5px solid #f0f0f0;
    display: flex;
    align-items: center;
}
.row img {
    width: 15px;
    margin-right: 6px;
}
.v-table__body {
    height: 650px;
    overflow: auto;
}
.v_table__row {
    text-decoration: none;
    color: #000;
}
@media only screen and (max-width: 576px) {
  .v-table__input-select {
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    }
}
       
</style>
