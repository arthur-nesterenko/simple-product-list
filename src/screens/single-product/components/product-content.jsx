import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import RemoveIcon from 'material-ui-icons/Delete';
import ModeEditIcon from 'material-ui-icons/ModeEdit';


const styles = theme => ({
    root   : theme.mixins.gutters( {
        paddingTop   : 16,
        paddingBottom: 16,
        marginTop    : theme.spacing.unit * 3,
        width        : '80%'
    } ),
    list   : {
        display      : 'flex',
        listStyle    : 'none',
        flexDirection: 'row',
        margin       : 16

    },
    item   : {
        marginLeft : 16,
        marginRight: 16
    },
    divider: {
        marginTop   : 16,
        marginBottom: 16
    }
});

const ProductContent = ( { id, title, description, preview, sku, price, classes, onDelete } ) => {
    return (
        <Paper className={classes.root} elevation={4}>
            <div>
                <img src={`data:image/png;base64,${preview}`} alt={title}/>
                <Divider light className={classes.divider}/>
                <Typography type="headline" component="h3">
                    {title}
                </Typography>
                <ul className={classes.list}>
                    <li className={classes.item}><span>Price:</span> ${price}</li>
                    <li className={classes.item}><span>SKU:</span> {sku}</li>
                </ul>
                <Typography type="caption">
                    <div>{description}</div>
                </Typography>
                <Divider light className={classes.divider}/>
                <Link to={`/${id}/edit`}>
                    <Button
                        dense
                        color="accent"
                        aria-label="edit"
                        title='Edit product'>
                        <ModeEditIcon/>
                    </Button>
                </Link>

                <Button
                    dense
                    color="primary"
                    aria-label="remove"
                    onClick={() => onDelete( id )}
                    title='Remove product'>
                    <RemoveIcon/>
                </Button>
            </div>
        </Paper>
    );

};


ProductContent.propTypes = {
    description: PropTypes.string,
    id         : PropTypes.number,
    preview    : PropTypes.string,
    price      : PropTypes.number,
    sku        : PropTypes.string,
    title      : PropTypes.string,
    classes    : PropTypes.object.isRequired
};


export default withStyles( styles )( ProductContent );