<template>
        <div class="v-table__pagination">
            <div class='pagination__last-btn'>
                <div class='page' @click='changePage(lastPage)' v-if="minPageOffLastBtn()">&lt;</div>
            </div>
            <div class='pagination__pages'>
                <div class='page'  @click='setPage(1)' v-if="minPage()">{{1}}</div>
                <div class='page-dots' v-if="minPage()">...</div>
                <div class='page'
                    v-for="page in getPagesArray" 
                    @click="changePage(page)" 
                    :key="page"
                    :class="{'current': pageNumber == page}"
                >
                    {{page}}
                </div>

                <div class='page-dots' v-if="maxPage()">...</div>
                <div class='page'  @click='setPage(pages)' v-if="maxPage()">{{this.pages}}</div>
            </div>
            <div class='pagination__next-btn'>   
                <div class='page' @click='changePage(nextPage)' v-if="maxPageOffNextBtn()">&gt;</div>
            </div>    
        </div>  
</template>

<script>
export default {
    name: 'Pagination',
    props: [ 'pageNumber', 'pages'],
    computed: {
        getPagesArray() {
            let pagesArray = []

            for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
                pagesArray.push(i)
            }
            return pagesArray
        },
        rangeStart() {
            let start = this.pageNumber - this.pageRange

            return (start > 0) ? start : 1
        },
        rangeEnd() {
            let end = this.pageNumber + this.pageRange

            return (end < this.pages) ? end : this.pages
        },
        nextPage() {
            return this.pageNumber + 1
        },
        lastPage() {
            return this.pageNumber - 1
        }
  
    },
    data() {
        return {
            pageRange: 2
        } 
    },
    methods: {
        minPage() {
            return this.pageNumber > 3
        },
        maxPage() {
            return this.pageNumber < this.pages-2
        },
        minPageOffLastBtn() {
             return this.pageNumber > 1
        },
        maxPageOffNextBtn() {
            return this.pageNumber < this.pages
        },
        changePage(page) {
            this.$emit('page-click', page)
        },
        setPage(value) {
            this.$emit('page-click', value)
        }
    }  
}
  
</script>

<style scoped>
.v-table__pagination{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.pagination__pages {
    display: flex;
    justify-content: center;
    margin-right: 5px;  
    margin-left: 5px; 
    flex-basis: 40%;
}
.page {
    padding: 8px;
    border: 1px solid #ced4de;
    margin-bottom: 5px; 
    width: 25px;  
}
.pagination__last-btn {
    display: flex;
    flex-basis: 30%;
}
.pagination__next-btn {
    display: flex;
    justify-content: flex-end;
    flex-basis: 30%;
}
.page-dots {
    padding: 8px;
    margin-bottom: 5px;
}
.page:not(:first-child) {
    margin-left: 5px;
}
.page:hover, .current{
    background: #a9b0ba;
    cursor: pointer;
    color: #ffffff;
}

</style>
