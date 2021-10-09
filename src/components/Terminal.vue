<template>
  <div>
    <div class="table-block">
      <h3>Mypersonal coasts</h3>
      <button>Add new coast</button>
      <table>
        <tr class="title_table">
          <td class="title_table-elem">Date</td>
          <td class="title_table-elem">Category</td>
          <td class="title_table-elem">Value</td>
        </tr>
        <tr v-for="elem in purchase" :key="elem.id">
          <td class="table_elem" v-bind:date="date">{{ elem.date }}</td>
          <td class="table_elem" v-bind:name="name">{{ elem.name }}</td>
          <td class="table_elem" v-bind:price="price">{{ elem.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: [
        'id',
        'name',
        'date',
        'price',
    ],
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
};
</script>

<style lang="scss" scoped>
.table-block {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background: lightgrey;
  color: black;
}
.title_table-elem {
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>