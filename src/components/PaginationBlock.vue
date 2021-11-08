<template>
  <div class="pagination_block">
      <p class="pagination_block-elem" 
        v-for="item in this.list" 
        :key="item.id" 
        @click="paginationChoice"
      >
        {{ item.id }}  
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
    props: ['list'],
    methods: {
        //---- Еще не понял для чего эта функция, думаю дальше ----//
        paginationChoice(e) {
            const elem = +e.target.textContent
            console.log(elem)
            this.dataSourse = this.list
            //---- Не забудь!) ----/
            console.log(this.dataSourse[elem - 1].id - 1)
            console.log(this.dataSourse[elem - 1].name)
        }
    },
}
</script>

<style>

</style>