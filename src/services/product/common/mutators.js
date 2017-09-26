import { fromJS } from 'immutable';


export const fetchProducts = ( state, { payload } ) => state.merge(
    fromJS( {
        items     : fromJS( payload ),
        isFetching: true,
    } )
);

export const remove = ( state, { payload: { productId } } ) => state.update( 'items', v =>
    v.filter(
        item => item.get( 'id' ) !== productId )
);


export const failure = ( state, { payload: { error } } ) => state.set( 'error', error );