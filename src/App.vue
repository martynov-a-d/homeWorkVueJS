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
//---- import / export ----//
import HelloWorld from "./components/HelloWorld.vue";
import Calculator from "./components/Calculator.vue";
import Terminal from "./components/Terminal.vue";

export default {
  name: "App",
  //---- Объявление компонентов ----//
  components: {
    HelloWorld,
    Calculator,
    Terminal,
  },
  //---- Объявление переменных ----//
  data() {
    return {
      isHidenCalc: false,
      isHidenTerm: false,
      isHidenHW: false,
    };
  },
  methods: {
    //---- Функция скрывающая блоки приложений ----//
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