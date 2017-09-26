import PropTypes from 'prop-types';
import React from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    root : {
        marginTop: theme.spacing.unit * 3,
        position : 'absolute',
        top      : '50vh',
        textAlign: 'center',
        width    : '90%',
    },
    title: {
        color: '#D32F2F'
    },
    btn  : {
        marginTop: 16
    }
});


const Prealoader = ( { isLoaded, children, error, classes } ) => isLoaded && !error ?
    children
    : <div className={classes.root}>
        <Typography type="title" gutterBottom className={classes.title}>
            {error}
        </Typography>
        <LinearProgress style={{
            backgroundColor: error ? '#D32F2F' : '#0D47A1'
        }}/>
        {error && <Button raised  color="accent" className={classes.btn} onClick={() => window.location.reload()}>Refresh page</Button>}
    </div>;

Prealoader.defaultValues = {
    error: false
};
Prealoader.propTypes = {
    children: PropTypes.element.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    classes : PropTypes.object.isRequired
};
export default withStyles( styles )( Prealoader );