<template>
  <div>
      <button @click="test">
        {{ count }}    
      </button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0,
        }
    },
    methods: {
        test() {
            console.log(event.target);
        }
    }
}
</script>

<style>

</style>