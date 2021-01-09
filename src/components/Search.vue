<template>
    <div class="v-input">
        <div class="clearable"> 
            <input 
                type="text" 
                v-model='searchString'
                :placeholder="$t('search.placeholder') + `: ${placeholderForSearch}`" 
                required>
            <strong 
                @click="clearField"
                :class="[clearSmallBtn, searchString.length === 0 ? '' : isActive]"
            >
                &times;
            </strong>
        </div>
        <button 
            @click.prevent='searchName'
            :class="[primaryBtn, searchString.length === 0 ? '' : isActiveSearch]"
        >
            &#8981; {{$t('search.search')}}
        </button>
        <button 
            @click.prevent='clearFilteredValue' 
            v-if="this.filteredValue"
            class="primary-btn clear-btn"
        >
            {{$t('search.clear')}}
        </button>
    </div>
</template>

<script>
export default {
    props:
        ['filteredValue', 'placeholderForSearch'],    
    methods: {
        searchName() {
            if (this.searchString.trim()) {
                this.$emit('search', this.searchString)
            }    
        },
        clearField() {
            if (this.searchString.trim()) {
                this.searchString = ''
            }
        },
        clearFilteredValue() {
            this.searchString = ''
            this.$emit('clear-filtered-value')
        }
    },
    data() {
        return {
            searchString: '',
            clearSmallBtn: 'clear-small-btn',
            isActive: 'is-active',
            primaryBtn: 'primary-btn',
            isActiveSearch: 'is-active-search'
        }
    }
    }
</script>

<style scoped>
.v-input{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center; 
}
.clearable{
    position: relative;
    margin-right: 10px;
}
.clearable input{
    padding: 10px;
    padding-right: 24px;
    height: 7px; 
}
.clear-small-btn{
    position: absolute;
    right: 0; 
    top: 5px;
    padding: 0 8px;
    font-size: 18px;
    cursor: not-allowed;
    color: #c7c7c7;
}

.clearable input:focus, button:focus {
    outline: none;
}
.primary-btn  {
    background-color: #bfbfbf;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    cursor: not-allowed;
}
.clear-btn {
    margin-left: 5px;
    background-color: #838481;
    cursor: pointer;
    pointer-events: auto;
}
.is-active {
    color: #000000;
    cursor: pointer;
    pointer-events: auto;
}
.is-active-search {
    background-color: #5acc58;
    cursor: pointer;
    pointer-events: auto;
}
</style>
