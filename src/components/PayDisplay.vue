<template>
  <div class="payDisplay-block">
    <td class="payDisplay-elem">{{ this.date }}</td>
    <td class="payDisplay-elem">{{ this.name }}</td>
    <td class="payDisplay-elem">{{ this.price }}</td>    
  </div>
</template>

<script>
export default {
  name: "Terminal",
  //---- Входные параметры ----//
  props: {
    id: Number,
    name: String,
    date: String,
    price: Number,
  },
}
</script>

<style lang="scss">

</style>