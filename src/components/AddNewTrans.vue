<template>
    <div>
        <input type="date" placeholder="Date" v-model="date">
        <input type="text" placeholder="Category" v-model="name">
        <input type="text" placeholder="Value" v-model="price">
        <button @click="addCoast">Add coast</button>
    </div>
</template>

<script>
export default {
    props: {
        date: String,
        name: String,
        price: Number,
    },
    methods: {
        addCoast() {
            const newPayElem = {
                date: this.date,
                name: this.name,
                price: +this.price,
            }
        this.$emit('addNewTrans', newPayElem)
        }
    }
}
</script>

<style>

</style>