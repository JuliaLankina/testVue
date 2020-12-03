<template>
    <div class="v-input">
        <div class="clearable">
            <input 
                type="text" 
                v-model='searchString' 
                placeholder="Например: Stellar" 
                required>
            <strong @click="clearField" class="clear-small-btn">&times;</strong>
        </div>
        <button 
            class="primary-btn" 
            @click.prevent='searchName'
        >
        &#8981; Найти
        </button>
        <button 
            @click.prevent='clearFilteredValue' 
            v-if="this.filteredValue"
            class="primary-btn clear-btn"
        >
        Сброс
        </button>
    </div>
</template>

<script>
export default {
    props:
        ['filteredValue'],    
    methods: {
        searchName() {
            if (this.searchString.trim()) {
                const value = this.searchString

                this.$emit('search', value)
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
            searchString: ''
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
    cursor: pointer;
}
.clearable input:focus, button:focus {
    outline: none;
}
.primary-btn  {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
}
.clear-btn {
    margin-left: 5px;
    background-color: #838481;
}
</style>
