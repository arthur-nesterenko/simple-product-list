import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import RemoveIcon from 'material-ui-icons/Delete';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';


const styles = {
    media: {
        height: 200,
    },
};

const ProductItem = ( { id, title, price, preview, onDelete, classes } ) => (
    <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={`'data:image/png;base64,${preview}'`}
            title={title}
        />
        <CardContent>
            <Typography type="headline" component="h2">
                {title}
            </Typography>
            <Typography component="p">
                {price}
            </Typography>
        </CardContent>
        <CardActions>
            <Button dense color="accent">
                <Link to={`/${id}`}>Read more</Link>
            </Button>

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
        </CardActions>
    </Card>
);


ProductItem.propTypes = {

    id      : PropTypes.number.isRequired,
    title   : PropTypes.string.isRequired,
    sku     : PropTypes.string.isRequired,
    price   : PropTypes.number.isRequired,
    preview : PropTypes.string,
    onDelete: PropTypes.func

};

export default withStyles( styles )( ProductItem );