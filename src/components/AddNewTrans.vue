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
            id: '',
            date: '',
            name: '',
            price: '',
        }
    },
    //---- Входные параметры ----//
    props: ['list'],
    methods: {
        ...mapMutations([
            'addNewTrans'
        ]),
        //---- Функция добавления новой транзакции ----//
        addCoast() {
            //---- Передача в мутацию объекта новой транзакции ----//
            this.addNewTrans({
                id: this.list.length + 1, // Получает длинну state и + 1
                date: this.date,
                name: this.name,
                price: +this.price
            }),
            this.test()
        },
        //---- Функция обнуления ----//
        test() {
            const zeroingOut = ''
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