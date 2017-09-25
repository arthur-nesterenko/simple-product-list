import { request } from './../../../utils/request-api';

const fetch = productId => request( `/products/${productId}` );

const create = data => request( `/products`, 'post', data );

const update = ( data ) => request( `/products/${data.id}`, 'put', data );




export default { fetch, create, update };