<template>
  <div class="pagination_block">
      <p class="pagination_block-elem" 
        v-for="item in this.list" 
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
            pageNum: [],
            showNext: false,
        }
    },
    //---- Входные параметры ----//
    props: ['list'],
    methods: {
        //---- Не понял для чего эта функция мне, но с нее начало работать ----//
        paginationChoice(e) {
            const elem = +e.target.textContent

            this.dataSourse = this.list
            //---- Не забудь!) ----/
            console.log(elem) // Выводит занчение id
            console.log(this.dataSourse[elem - 1].id - 1) // Выводит значение index
            console.log(this.dataSourse[elem - 1].name) // Выводит значение name
        }
    },
}
</script>

<style>

</style>