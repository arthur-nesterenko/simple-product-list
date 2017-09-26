import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
    root: {
        width     : '100%',
        maxWidth  : 200,
    },
});

const Navbar = ( { classes } ) => (
    <List className={classes.root}>

        <Link to='/'>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
        </Link>
        <Link to='/new-product'>
        <ListItem button>

                <ListItemIcon>
                    <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="Add new"/>
        </ListItem>
        </Link>
    </List>
);

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( Navbar );
