<template>
        <div class='v-select'>
            <label>
                <slot></slot>
            </label>
            <select 
                v-model="currenciesPerPage" 
            >
                <option 
                    v-for="(option, i) in options" 
                    :key="`${option}` + i"
                >
                    {{option}}
                </option>
            </select>
        </div>  
</template>

<script>
export default {
    data() {
        return {
            currenciesPerPage: '10',
            options: {
                '5': 5,
                '10': 10,
                '20': 20,
                '50': 50,
                '100': 100,
            }
        }
    },
    watch: {
        currenciesPerPage() {
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
    cursor: pointer;
}
.v-select label {
    margin-right: 5px;
}
</style>
