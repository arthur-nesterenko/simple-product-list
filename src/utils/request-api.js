import axios from 'axios';

const apiRequset = axios.create( {
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Accept'      : 'application/json',
        'Content-Type': 'application/json'
    },


} );


/**
 *
 *  this case handle of errors  only for showcase
 */
const errorText = 'Something was wrong';

apiRequset.interceptors.response.use(
    response => {
        if (response.data.errors)
            return Promise.reject( { error: errorText } );
        if ('success' in response.data && !response.data.success)
            return Promise.reject( { error: errorText } );
        else return response.data;
    },
    error => Promise.reject( { error: errorText } )
);


/**
 *
 * @param {*} url
 * @param {*} method
 * @param {*} data
 * @param {*} rest
 */
export const request = ( url, method = 'get', data = {}, ...rest ) => apiRequset( {
    method,
    url,
    data,
    ...rest,

} )
    .then( response => response )
    .catch( error => {
        throw error;
    } );


export default apiRequset;