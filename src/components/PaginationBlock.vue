<template>
  <div class="pagination_block">
      <p class="pagination_block-elem" 
        v-for="item in pageNum" 
        :key="item.id" 
        @click="paginationChoice"
      >
        {{ item.name }}    
      </p>
  </div>
</template>

<script>
export default {
    //---- Объявление переменных ----//
    data () {
        return {
            dataSourse: [1],
            pageSize: 5,
            pageNum: [
                {
                    id: 1,
                    name: 1,
                },
                {
                    id: 2,
                    name: 2,
                },
                {
                    id: 3,
                    name: 3,
                },
                {
                    id: 4,
                    name: 4,
                },
                {
                    id: 5,
                    name: 5,
                },
                {
                    id: 6,
                    name: 6,
                }
            ],
            showNext: false,
        }
    },
    methods: {
        paginationChoice(e) {
            console.log(+e.target.textContent);
        }
    }
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