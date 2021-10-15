<template>
  <div>
    <div class="table-block">
      <h3>Mypersonal coasts</h3>
      <AddNewTrans />
      <button>Add new coast</button>
      <table>
        <tr class="title_table">
          <td class="title_table-elem">Date</td>
          <td class="title_table-elem">Category</td>
          <td class="title_table-elem">Value</td>
        </tr>
        <tr v-for="elem in purchase" :key="elem.id">
          <PayDisplay 
            :date="elem.date"
            :name="elem.name"
            :price="elem.price"
          />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AddNewTrans from "./AddNewTrans.vue";
import PayDisplay from "./PayDisplay.vue";
export default {
  data() {
    return {
      purchase: [
        {
          id: 1,
          name: "eat",
          date: "31.07.1990",
          price: 320,
        },
        {
          id: 2,
          name: "cafe",
          date: "31.07.1990",
          price: 540,
        },
      ],
    };
  },
  components: {
    AddNewTrans,
    PayDisplay,
  }
};
</script>

<style lang="scss">
.table-block {
  margin: 0 auto;
  width: 300px;
  // max-height: 500px;
  background: lightgrey;
  color: black;
}
.title_table-elem {
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>