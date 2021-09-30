<template>
  <div class="calc-block">
    <div class="display">
      <label for="operand1">Операнд 1</label>
      <label for="operand2">Операнд 2</label>
      <div class="operand_display">
        <p class="error" v-if="error">ERROR</p>
        <input v-model.number="operand1" />
        <input v-model.number="operand2" />
        = {{ result }}
      </div>
    </div>
    <button
      v-for="item in operators"
      :key="item.name"
      @click="calcHandler(item.action)"
      class="btn-action"
    >
      {{ item.name }}
    </button>
    <button @click="delFals">Del</button>
    <div class="keyboard"></div>
    <div class="flagsNum">
      <input type="checkbox" id="!isHidden" v-model="isHidden" />
    </div>
    <div v-show="isHidden" class="btn-number">
      <button v-for="item in numbers" :key="item.name" @click="btnHandler(item.name)" class="btn-number_elem">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: false,
      isHidden: false,
      operators: [
        {
          name: "+",
          action: "+",
        },
        {
          name: "-",
          action: "-",
        },
        {
          name: "*",
          action: "*",
        },
        {
          name: "/",
          action: "/",
        },
        {
          name: "^",
          action: "**",
        },
        {
          name: "!/",
          action: "/",
        },
      ],
      numbers: [
        {
          name: "1",
          action: "1",
        },
        {
          name: "2",
          action: "2",
        },
        {
          name: "3",
          action: "3",
        },
        {
          name: "4",
          action: "4",
        },
        {
          name: "5",
          action: "5",
        },
        {
          name: "6",
          action: "6",
        },
        {
          name: "7",
          action: "7",
        },
        {
          name: "8",
          action: "8",
        },
        {
          name: "9",
          action: "9",
        },
        {
          name: "0",
          action: "0",
        },
      ],
    };
  },
  methods: {
    btnHandler(item) {
          this.operand1 = parseInt(this.operand1 += item);
          console.log(+this.operand1);
    },
    calcHandler(item) {
      switch (item) {
        case "+":
          this.add();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multiplication();
          break;
        case "/":
          if (this.operand2 !== 0) {
            this.division();
          } else {
            this.error = true;
          }
          break;
        case "**":
          this.exponentiation();
          break;
        case "!/":
          this.redevision();
          break;
        default:
          break;
      }
    },
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
    delFals() {

      this.operand1 = parseInt(
        this.operand1
          .toString()
          .substring(0, this.operand1.toString().length - 1)
      );
    },
  },
};
</script>

<style lang="scss">
$btn-orange: orange;
#app {
  font-family: Georgia, "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.calc-block {
  margin: 0 auto;
  padding: 20px;
  max-width: 400px;
  max-height: 400px;
  background-color: cornsilk;
  border: 1px solid transparent;
  border-radius: 5px;
}
label {
  margin: 20px;
}
.error {
  color: red;
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