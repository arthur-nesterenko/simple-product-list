import { fromJS } from 'immutable';


export const fetch = ( state, { payload } ) => state.merge( fromJS( {
    ...payload,
    isFetching: true,
} ) );

export const failure = ( state, { payload: { error } } ) => state.set( 'error', error );