<template>
  <div>
    <div class="table-block">
      <h3>Mypersonal coasts</h3>
      <AddNewTrans @addNewTrans="addNewTrans" v-show="isHidenNewTrans"/>
      <button @click="isVisible">Add new coast</button>
        <div class="payDisplay-title">
          <p class="titleElem">Date</p>
          <p class="titleElem">Category</p>
          <p class="titleElem">Value</p>
        </div>
      <table>
        <tr v-for="elem in purchase" :key="elem.id" class="payDisplay-block">
          <PayDisplay 
            :date="elem.date"
            :name="elem.name"
            :price="elem.price"
          />
        </tr>
      </table>
      <PaginationBlock />
    </div>
  </div>
</template>

<script>
import AddNewTrans from "./AddNewTrans.vue";
import PayDisplay from "./PayDisplay.vue";
import PaginationBlock from "./PaginationBlock.vue";
export default {
  data() {
    return {
      isHidenNewTrans: false,
      purchase: [
        {
          id: 1,
          name: "eat",
          date: "2021-10-17",
          price: 320,
        },
        {
          id: 2,
          name: "cafe",
          date: "2021-10-18",
          price: 540,
        },
      ],
    };
  },
  methods: {
    addNewTrans(elem) {
      this.purchase=[...this.purchase, elem]
    },
    isVisible: function (elem) {
      this.isHidenNewTrans = !this.isHidenNewTrans;
      if (this.isHidenNewTrans) {
        elem.target.innerHTML = "Hiden";
      } else {
        elem.target.innerHTML = "Add new coast";
      }
    }
  },
  components: {
    AddNewTrans,
    PayDisplay,
    PaginationBlock,
  }
};
</script>

<style lang="scss" scoped>
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