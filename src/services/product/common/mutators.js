import {fromJS} from 'immutable';



export const fetchProducts = (state,{payload}) => state.merge(
    fromJS({
    items: fromJS(payload),
    isFetching:true
})
);