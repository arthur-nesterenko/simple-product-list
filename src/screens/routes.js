import Home from './home'
import SingleProduct from './single-product'
import NewProductScreen from './new-product'

const routes = [
    {
        path     : '/',
        component: Home,
        exact    : true,
        name : 'home'
    },
     {
                path     : '/new-product',
                component: NewProductScreen,
                exact    : true,
                name: 'new-product'
     },
    {
        path     : '/:productId',
        component: SingleProduct,
        exact    : true,
        name: 'single-product'
    },
    {
        path     : '/:product/edit',
        component: Home,
        exact    : true,
        name: 'edit-product'
    },




]

export default routes;