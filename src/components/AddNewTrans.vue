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
    //---- Объявление переменных ----//
    data() {
        return  {
            date: '',
            name: '',
            price: '',
        }
    },
    methods: {
        ...mapMutations([
            'addNewTrans'
        ]),
        //---- Функция добавления новой транзакции ----//
        addCoast() {
            //---- Передача в мутацию объекта новой транзакции ----//
            this.addNewTrans({
                date: this.date,
                name: this.name,
                price: +this.price,
            }),
            this.test()
        },
        //---- Функция обнуления ----//
        test() {
            const zeroingOut = '';
            this.date = zeroingOut 
            this.name = zeroingOut 
            this.price = zeroingOut
        }
    }
  },
};
</script>

<style>
</style>