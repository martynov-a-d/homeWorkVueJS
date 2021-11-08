<template>
  <div>
      <div>
        {{ pageNum }}    
      </div>
  </div>
</template>

<script>
export default {
    //---- Объявление переменных ----//
    data () {
        return {
            dataSourse: [],
            pageSize: 5,
            pageNum: 0,
            showNext: false,
        }
    },
    // props: ['list'],
    // methods: {
    //     pagination(elem) {
    //         elem
    //     }
    // },
    // computed: {
    //     pages() {
    //         return Math.ceil(this.list.length / 5)
    //     }
    // }
}
</script>

<style>

</style>