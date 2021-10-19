import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import Calculator from '../components/Calculator.vue';
import Terminal from '../components/Terminal.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/helloWorld',
            name: 'helloWorld',
            component: HelloWorld,
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: Calculator,
        },
        {
            path: '/terminal',
            name: 'terminal',
            component: Terminal,
        }
    ]
})