<template>
  <div>
    <div class="table-block">
      <h3>Mypersonal coasts</h3>
      <!-- Блок добавления новой транзакции -->
      <AddNewTrans @addNewTrans="addNewTrans" v-show="isHidenNewTrans"/>
      <button @click="isVisible">Add new coast</button>
        <div class="payDisplay-title">
          <p class="titleElem">Date</p>
          <p class="titleElem">Category</p>
          <p class="titleElem">Value</p>
        </div>
      <table>
        <tr v-for="elem in getPurchaseList" :key="elem.id" class="payDisplay-block">
          <!-- Блок рендера транзакций -->
          <PayDisplay 
            :date="elem.date"
            :name="elem.name"
            :price="elem.price" />
        </tr>
      </table>
      <!-- Блок пагинации -->
      <PaginationBlock />
    </div>
  </div>
</template>

<script>
// import AddNewTrans from "./AddNewTrans.vue";
import PayDisplay from "./PayDisplay.vue";
import PaginationBlock from "./PaginationBlock.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isHidenNewTrans: false,
      purchase: [],
      res: [],
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
  },
  computed: {
    ...mapGetters(["getPurchaseList"]),
  },
  mounted() {
    this.fetchData();
  },
  //---- Объявление компонентов ----//
  components: {
    // AddNewTrans,
    PayDisplay,
    PaginationBlock,
  },
  created() {
    this.setPurchaseListData(this.fetchData());
  },
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
  // max-height: 500px;
  background: lightgrey;
  color: black;
}
.payDisplay-elem {
  // width: 100px;
  text-align: center;
}
.payDisplay-block {
  width: 300px;
  display: flex;
  justify-content: space-around;
}
* {
  margin: 0;
  padding: 0;
}
</style>