import axios from 'axios';

const apiRequset = axios.create( {
    baseURL: 'http://localhost:3001/api',
    headers: {
      'Accept'       : 'application/json',
      'Content-Type' : 'application/json'
    },
  
  
  } );


  
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
    .then( response => response.data )
    .catch( error => {
        throw new Error(error)
    } );
  
  
  export default apiRequset;