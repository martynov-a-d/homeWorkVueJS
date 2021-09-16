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
      <button v-on:click="result = operand1 + operand2" class="btn-action">
        +
      </button>
      <button v-on:click="result = operand1 - operand2" class="btn-action">
        -
      </button>
      <button v-on:click="result = operand1 / operand2" class="btn-action">
        /
      </button>
      <button v-on:click="result = operand1 * operand2" class="btn-action">
        *
      </button>
      <button v-on:click="result = operand1 ** operand2" class="btn-action">
        ^
      </button>
      <button
        v-on:click="result = parseInt(operand1 / operand2)"
        class="btn-action"
      >
        !/
      </button>
    </div>
    <!-- <div class="btn-number">
      <button v-on:click="1">1</button>
      <button v-on:click="2">2</button>
      <button v-on:click="3">3</button>
      <button v-on:click="4">4</button>
      <button v-on:click="5">5</button>
      <button v-on:click="6">6</button>
      <button v-on:click="7">7</button>
      <button v-on:click="8">8</button>
      <button v-on:click="9">9</button>
      <button v-on:click="0">0</button>
    </div> -->
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
    };
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
