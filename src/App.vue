<template>
  <div id="app">
    <!-- Component HelloWord -->
    <button @click="isVisibleBlock('isHidenHW')">Hello World</button>
    <div v-show="isHidenHW">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <!-- Component calc -->
    <button @click="isVisibleBlock('isHidenCalc')">Calculator</button>
    <Calculator v-show="isHidenCalc"/>
    <!-- Component term -->
    <button @click="isVisibleBlock('isHidenTerm')">Terminal</button>
    <Terminal v-show="isHidenTerm"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Calculator from "./components/Calculator.vue";
import Terminal from "./components/Terminal.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Calculator,
    Terminal,
  },
  data() {
    return {
      isHidenCalc: false,
      isHidenTerm: false,
      isHidenHW: false,
    };
  },
  props: {
        date: String,
        name: String,
        price: Number,
    },
  methods: {
    isVisibleBlock (elem) {
      switch (elem) {
        case "isHidenHW":
          this.isHidenHW = ! this.isHidenHW;
          break;

        case "isHidenCalc":
          this.isHidenCalc = !this.isHidenCalc;
          break;

        case "isHidenTerm":
          this.isHidenTerm = !this.isHidenTerm;
          break;

        default:
          break;
      }
    }
  },
};
</script>