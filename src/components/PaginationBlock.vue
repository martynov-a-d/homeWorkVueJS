<template>
  <div>
      <button @click="Pagination">
        {{ pageNum }}    
      </button>
  </div>
</template>

<script>
export default {
    //---- Объявление переменных ----//
    data () {
        return {
            dataSourse: '',
            pageSize: 5,
            pageNum: 0,
            showNext: false,
        }
    },
    methods: {
        Pagination(elem) {
            elem
        }
    }
}
</script>

<style>

</style>