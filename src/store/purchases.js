export default {
    actions: {
        fetch(url)
            .then(res => res.json())
            .then(ctx.commit('setPurchaiseListData', test))
        // fetchData(ctx) {
        //     const res = [
        //       {
        //         id: 1,
        //         name: "eat",
        //         date: "2021-10-17",
        //         price: 320,
        //       },
        //       {
        //         id: 2,
        //         name: "cafe",
        //         date: "2021-10-18",
        //         price: 540,
        //       },
        //     ]
        //     const test = res;
        //     ctx.commit('setPurchaseListData', test)
        // },
    },
    mutations: {
        setPurchaseListData(state, purchase) {
            state.purchase = purchase;
        },
        addNewTrans(state, elem) {
            state.purchase=[...state.purchase, elem]
        },
    },
    state: {
        purchase: [],
    },
    getters: {
        getPurchaseList: state => state.purchase,
    },
}