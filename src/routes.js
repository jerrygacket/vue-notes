// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import HomePage from '@/pages/HomePage'
import ExamplePage from '@/pages/ExamplePage'
import NotFound from '@/pages/404Page'

// routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/example',
            name: 'example',
            component: ExamplePage
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})