import Vue from 'vue';
import Router from 'vue-router';

// import HelloWorld from '../components/HelloWorld.vue';
// import Calculator from '../components/Calculator.vue';
import Terminal from '../components/Terminal.vue';
import AddNewTrans from '../components/AddNewTrans.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
        },
        {
            path: '/helloWorld',
            name: 'helloWorld',
            // component: HelloWorld,
            component: () => import('../components/HelloWorld.vue'),
        },
        {
            path: '/calculator',
            name: 'calculator',
            // component: Calculator,
            component: () => import('../components/Calculator.vue'),
        },
        {
            path: '/terminal',
            // name: 'terminal',
            component: Terminal,
            children: [
                {
                    path: '/',
                    name: 'form'
                },
                {
                    path: '/terminal/add',
                    // name: 'addNewTrans',
                    component: AddNewTrans,
                    children: [
                        {
                            path: '/terminal/add',
                            name: 'food',
                            component: AddNewTrans,
                        },
                        {
                            path: '/terminal/add',
                            name: 'transport',
                            component: AddNewTrans,
                        },
                        {
                            path: '/terminal/add',
                            name: 'entertainment',
                            component: AddNewTrans,
                        },
                    ],
                },
            ]
        },
        {
            path: '*',
            name: '404',
        },
    ]
})