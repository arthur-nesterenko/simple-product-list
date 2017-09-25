import Home from './home'
import SingleProduct from './single-product'
import ManageProductScreen from './manage-product'

const routes = [
    {
        path     : '/',
        component: Home,
        exact    : true,
        name : 'home'
    },
     {
                path     : '/new-product',
                component: ManageProductScreen,
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
        path     : '/:productId/edit',
        component: ManageProductScreen,
        exact    : true,
        name: 'edit-product'
    },




]

export default routes;