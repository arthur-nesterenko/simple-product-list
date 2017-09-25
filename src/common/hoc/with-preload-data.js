import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions as productsActions } from './../../services/product/common';
import { actions as singleProductActions } from './../../services/product/single';
import routes from './../../screens/routes';


const withPreloadData = WrappedComponent => {
    class RootComponent extends Component {


        componentWillMount() {

            const { dispatch } = this.props;


            switch ( this.getPath() ) {
                case 'home':
                    dispatch( productsActions.fetch() );
                    break;
                case 'single-product':
                    dispatch( singleProductActions.fetch() );
                    break;
            }
        }

        getPath = () => {
            const { location: { pathname } } = this.props;

//            console.log( this.props,'----' );



            const path = pathname;
            const index = routes.findIndex( route => route.path === path );

            return index !== -1 ? routes[ index ].name : '';
        };

        render() {
            return <WrappedComponent/>;
        }
    }


    return withRouter( connect( null, null )( RootComponent ) );
};
export default withPreloadData;