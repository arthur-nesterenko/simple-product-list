import { fromJS } from 'immutable';


export const fetch = ( state, { payload } ) => state.merge( fromJS( {
    ...payload,
    isFetching: true
} ) );