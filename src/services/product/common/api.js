import {request} from './../../../utils/request-api'



const fetch = () => request('/products');

const remove = productId => request( `/products/${productId}`,'delete' );



export default  {
    fetch,
    remove
}