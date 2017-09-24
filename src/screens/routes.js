import Home from './home'



const routes = [
    {
        path     : '/',
        component: Home,
        exact    : true,
    },
    {
        path     : '/:product',
        component: Home,
        exact    : true,
    },
    {
        path     : '/:product/edit',
        component: Home,
        exact    : true,
    }


]

export default routes;