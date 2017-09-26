import React from 'react';
import { ProductFormContainer } from './../../common/form';

const ManageProduct = ( { match: { params } } ) => {

    const isEditPost = 'productId' in params;
    return (
        <div>
            <ProductFormContainer productId={isEditPost && params.productId}
                                  actionType={isEditPost
                                      ? 'update'
                                      : 'create'}/>
        </div>
    );
};

export default ManageProduct;