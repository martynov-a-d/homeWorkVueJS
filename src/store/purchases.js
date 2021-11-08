export default {

    actions: {
        /**
         * 
         * @param {*} ctx 
         */
        fetchData(ctx) {

            const url = 'https://raw.githubusercontent.com/lovealex574/homeWorkVueJS/hw_4/dataTranc.json';
            fetch(url)
                .then(res => res.json())
                .then(result => ctx.commit('setPurchaseListData', result))
        },
    },
    mutations: {
        /**
         * 
         * @param {*} state 
         * @param {*} purchase Данные с сервера
         */
        setPurchaseListData(state, purchase) {
            state.purchase = purchase;
        },
        /**
         * Добавление в стейт новой транзакции
         * @param {*} state 
         * @param {*} elem Объект новой транзакции
         */
        addNewTrans(state, elem) {
            state.purchase=[...state.purchase, elem]
        },
    },
    state: {
        purchase: [],
    },
    getters: {
        /**
         * 
         * @param {*} state 
         * @returns 
         */
        getPurchaseList: state => state.purchase,
    },
}