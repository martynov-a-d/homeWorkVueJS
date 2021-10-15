<template>
  <div>
          <td class="table_elem">{{ this.date }}</td>
          <td class="table_elem">{{ this.name }}</td>
          <td class="table_elem">{{ this.price }}</td>    
  </div>
</template>

<script>
export default {
  name: "Terminal",
    props: {
          id: Number,
          name: String,
          date: String,
          price: Number,
    },
}
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