<template>
  <div>
    <div class="table-block">
      <h3>Mypersonal coasts</h3>
      <!-- Блок добавления новой транзакции -->
      <AddNewTrans @addNewTrans="addNewTrans" v-show="isHidenNewTrans" :list="getPurchaseList" />
      <button @click="isVisible">Add new coast</button>
        <div class="payDisplay-title">
          <p class="titleElem">Date</p>
          <p class="titleElem">Category</p>
          <p class="titleElem">Value</p>
        </div>
      <table>
        <tr v-for="elem in pagData" 
          :key="elem.id" 
          class="payDisplay-block"
        >
          <!-- Блок рендера транзакций -->
          <PayDisplay :list="elem" /> <!-- Добавить в этот компонент данные, переданые через $event из PaginationBlock -->
        </tr>
      </table>
      <!-- Блок пагинации -->
      <PaginationBlock :list="getPurchaseList" @click.capture="pagEventHandler($event)"/>
    </div>
  </div>
</template>

<script>
import AddNewTrans from "./AddNewTrans.vue";
import PayDisplay from "./PayDisplay.vue";
import PaginationBlock from "./PaginationBlock.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  //---- Объявление переменных ----//
  data() {
    return {
      isHidenNewTrans: false,
      purchase: [], //  Обработанные данные с сервера
      res: [], // Необработанные данные с сервера
      pagData: [], // Данные полученые из PaginationBlock
    };
  },
  methods: {
    //---- Функция показ/скрытие блока добавления новой транзакции ----//
    isVisible: function (elem) {
      this.isHidenNewTrans = !this.isHidenNewTrans;
      if (this.isHidenNewTrans) {
        elem.target.innerHTML = "Hiden";
      } else {
        elem.target.innerHTML = "Add new coast";
      }
    },
    ...mapActions([
      'fetchData'
      ]),
    ...mapMutations([
      'setPurchaseListData', 'addNewTrans'
    ]),
    //---- Функция обрабатывает $event из PaginationBlock ----//
    pagEventHandler(elem) {
      this.pagData = elem
    }
  },
  computed: {
    ...mapGetters([
      'getPurchaseList'
    ])
  },
  mounted() {
    this.fetchData()
  },
  //---- Объявление компонентов ----//
  components: {
    AddNewTrans,
    PayDisplay,
    PaginationBlock,
  },
  created() {
    this.setPurchaseListData(this.fetchData())
  }
};
</script>
<!-- Стили -->
<style lang="scss" >
.payDisplay-title {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.table-block {
  margin: 0 auto;
  width: 300px;
  background: lightgrey;
  color: black;
}
.payDisplay-elem {
  padding: 0 20px;
}
.payDisplay-block {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
* {
  margin: 0;
  padding: 0;
}

.pagination_block {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  justify-content: center;
}

  .pagination_block-elem {
    color: grey;
    margin: 5px;
  }
</style>