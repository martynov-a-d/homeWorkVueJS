<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div id="app">
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="add" class="btn-action">+</button>
      <button @click="subtraction" class="btn-action">-</button>
      <button @click="division" class="btn-action">/</button>
      <button @click="multiplication" class="btn-action">*</button>
      <button @click="exponentiation" class="btn-action">^</button>
      <button @click="redevision" class="btn-action">!/</button>
    </div>
    <div class="flagsNum">
      <input type="checkbox" id="!isHidden" v-model="isHidden" />
    </div>
    <div v-show="isHidden" class="btn-number">
      <button @click="1">1</button>
      <button @click="2">2</button>
      <button @click="3">3</button>
      <button @click="4">4</button>
      <button @click="5">5</button>
      <button @click="6">6</button>
      <button @click="7">7</button>
      <button @click="8">8</button>
      <button @click="9">9</button>
      <button @click="0">0</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // name: "App",
  // components: {
  //   HelloWorld,
  // },
  name: "App",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      isHidden: false,
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
    },
    division() {
      this.result = this.operand1 / this.operand2;
    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2;
    },
    redevision() {
      this.result = parseInt(this.operand1 / this.operand2);
    },
  },
};
</script>

<style lang="scss">
$btn-orange: orange;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
// Кнопки калькулятора
button {
  padding: 10px;
  margin: 10px;
}
// Кнопки действия
.btn-action {
  background-color: $btn-orange;
  color: white;
  font-weight: 900;
}
//Кнопки чисел
.btn-number {
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  margin: 0 auto;
}
.btn-number:last-child {
  justify-content: center;
}
</style>
