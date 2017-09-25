export default function ( values, dispatch, action ) {


    return new Promise( ( resolve, reject ) => {
        dispatch( action( {
            data: values.toJS(),
            resolve,
            reject
        } ) );
    } );
}