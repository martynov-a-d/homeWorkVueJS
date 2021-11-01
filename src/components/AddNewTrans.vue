<template>
  <div>
    <input type="date" placeholder="Date" v-model="date" />
    <input type="text" placeholder="Category" v-model="name" />
    <input type="text" placeholder="Value" v-model="price" />
    <button @click="addCoast">Add coast</button>
    <p @click="test6">Price: {{ test2 }}</p>
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
  data() {
    return {
      test2: this.$route.query
    }
  },
  methods: {
    ...mapMutations(["addNewTrans"]),
    addCoast() {
      this.addNewTrans({
        date: this.date,
        name: this.name,
        // price: +this.price,
        price: +this.test2,
      });
    },
    test6() {
      this.test2 = this.$route.query.price;
      console.log(this.$route.query.price);
    }
  },
};
</script>

<style>
</style>