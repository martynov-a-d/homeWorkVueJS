<template>
  <div id="app">
    <!-- Component HelloWord -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- Component calc -->
    <Calculator />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Calculator,
  },
};
</script>