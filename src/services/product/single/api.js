import { request } from './../../../utils/request-api';

const fetch = productId => request( `/products/${productId}` );


export default { fetch };