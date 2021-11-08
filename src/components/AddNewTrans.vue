<template>
    <div>
        <input type="date" placeholder="Date" v-model="date">
        <input type="text" placeholder="Category" v-model="name">
        <input type="text" placeholder="Value" v-model="price">
        <button @click="addCoast">Add coast</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
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
                date: this.correctTime(),
                name: this.name,
                price: +this.price
            }),
            this.zeroingOut()
        },
        //---- Функция обнуления ----//
        zeroingOut() {
            const zeroingOut = ''
            this.date = zeroingOut 
            this.name = zeroingOut 
            this.price = zeroingOut
        },
        //---- Функция возвращает текущюю дату в случае незаполненого поля даты ----//
        correctTime() {
            if(this.date != '') {
                return this.date
            } else {
                const todayDate = new Date()
                const y = todayDate.getFullYear()
                const m = todayDate.getMonth()
                const d = todayDate.getDate()
                const y_m_d = `${y}-${m}-${d}`
                return y_m_d
            }
        }
    }
}
</script>

<style>

</style>