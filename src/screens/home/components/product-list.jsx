import React from 'react';
import ImmPropTypes from 'react-immutable-proptypes';
import ProductItem from './product-item';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    root: {
        flexGrow   : 1,
        marginTop  : 30,
        width      : '95%',
        marginLeft : 'auto',
        marginRight: 'auto'
    },
});


const ProductList = ( { items, onDelete, classes } ) => (
    <Grid className={classes.root} container spacing={24}>
        {items.valueSeq().map( item =>
            <Grid item xs={12} sm={12} md={4} xl={4} key={item.get( 'id' )}>
                <ProductItem  {...item.toObject()} onDelete={onDelete}/>
            </Grid>
        )}
    </Grid>
);


ProductList.propTypes = {
    items   : ImmPropTypes.list.isRequired,
    onDelete: PropTypes.func
};

export default withStyles( styles )( ProductList );