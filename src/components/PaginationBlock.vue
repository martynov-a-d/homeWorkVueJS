<template>
  <div class="pagination_block">
      <p class="pagination_block-elem" 
        v-for="item in this.testNum" 
        :key="item.id" 
        @click="paginationChoice" 
      >
        {{ item.id }} <!-- Выводит нумерацию пагинации -->
      </p>
  </div>
</template>

<script>
export default {
    //---- Объявление переменных ----//
    data () {
        return {
            dataSourse: [],
            pageSize: 5,
            // pageNum: this.list,
            showNext: false,
            testNum: [],
            countPage: '5'
        }
    },
    //---- Входные параметры ----//
    props: ['list'],
    created() {
      this.countPageMaker()
      // return this.testNum = [{id: 1},{id: 2},{id: 3}]
    },
    methods: {
        //---- Функция отображает выбраную страницу с транзакциями ----//
        paginationChoice(e) {
            const elem = +e.target.textContent
            this.countPage = Math.ceil(this.list.length / 5)
            this.pageMaker(this.countPage, elem)
            //---- Метод для передачи родителю события и данные ----//
            this.$emit('click', this.dataSourse.reverse())
            //---- Не забудь!) ----/
            console.log(this.list);
            // console.log(elem) // Выводит занчение id
            // console.log(this.dataSourse[elem - 1].id - 1) // Выводит значение index
            // console.log(this.dataSourse[elem - 1].name) // Выводит значение name
        },
        //---- Вычисляет какие транзакции показать на выбраной странице ----//
        pageMaker(countPage, elem) {
            const pageStart = elem * countPage
            const pageEnd = pageStart + this.pageSize
            this.dataSourse = this.list.slice(pageStart, pageEnd)
        },
        countPageMaker() {
            for(let i = 1; i < this.countPage; i++) {
              this.testNum.push({id: i})
            }
        }
    },
}
</script>

<style>

</style>