<template>
  <div>
    <input type="date" placeholder="Date" v-model="date" />
    <input type="text" placeholder="Category" v-model="name" />
    <input type="text" placeholder="Value" v-model="price" />
    <button @click="addCoast">Add coast</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    date: String,
    name: String,
    price: Number,
  },
  methods: {
    ...mapMutations(["addNewTrans"]),
    addCoast() {
      this.addNewTrans({
        date: this.date,
        name: this.name,
        price: +this.price,
      });
    },
  },
};
</script>

<style>
</style>