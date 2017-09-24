import Home from './home'



const routes = [
    {
        path     : '/',
        component: Home,
        exact    : true,
        name : 'home'
    },
    {
        path     : '/:product',
        component: Home,
        exact    : true,
        name: 'single-product'
    },
    {
        path     : '/:product/edit',
        component: Home,
        exact    : true,
        name: 'edit-product'
    }


]

export default routes;