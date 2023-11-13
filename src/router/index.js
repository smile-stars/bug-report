import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'search',
        component: () => import('@/views/search'),
        meta: {
            title: '搜索'
        }
    }
]

routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // 兼容IE
    window.scrollTo(0, 0)
    if (title) {
        document.title = title
    }
    next()
})

export {
    router
}
