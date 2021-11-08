<template>
  <div class="payDisplay-block">
    <td class="payDisplay-elem">{{ this.list.date }}</td>
    <td class="payDisplay-elem">{{ this.list.name }}</td>
    <td class="payDisplay-elem">{{ this.list.price }}</td>    
  </div>
</template>

<script>
export default {
  name: "Terminal",
  //---- Входные параметры ----//
  props: ['list'],
}
</script>

<style lang="scss">

</style>