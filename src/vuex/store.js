import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiKey = {
    api_key: '1eb05f06-53ae-4e11-a34a-a66bc963d9fc'
}

const store = new Vuex.Store({
    
    state: {
        currencies: []
    },
    actions:{
        getCurrenciesFromApi({commit}) {
            return axios.get(`https://api.simpleswap.io/v1/get_all_currencies`, {
                params: apiKey
            }).then((response) => {
                commit('setCurrenciesToVuex', response.data)
            })
        }
    },
    mutations:{
        setCurrenciesToVuex(state, currencies) {
            state.currencies = currencies
        }
    },
    getters: {
        currencies(state) {
            return state.currencies;
        },
        getOneCurrens: state => currensId => {
            return state.currencies.find(curr => curr.symbol === currensId)
        }
    }
})

export default store