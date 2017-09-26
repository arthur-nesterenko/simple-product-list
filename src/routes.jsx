import PropTpyes from 'prop-types';
import React from 'react';
import routes from './screens/routes';
import RouteWithSubRoutes from './utils/router-render';
import { Switch } from 'react-router-dom';
import Navbar from './common/navbar/components/navbar';
import Grid from 'material-ui/Grid';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';

import { red, lightBlue, orange } from 'material-ui/colors';

const theme = createMuiTheme( {
    palette: {
        primary  : lightBlue,
        secondary: {
            ...orange,
        },
        error    : red,
    },
} );

const styles = theme => ({
    sidebar: {
        background: '#F5F5F5'
    },
});

const Routes = ( { classes } ) => (
    <MuiThemeProvider theme={theme}>
        <Grid container>
            <Grid item xs={12} sm={12} md={2} lg={2} className={classes.sidebar}>
                <Navbar/>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                <Switch>
                    {routes.map( ( route, i ) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ) )}
                </Switch>
            </Grid>
        </Grid>
    </MuiThemeProvider>
);

Routes.PropTpyes = {
    classes: PropTpyes.object.isRequired
};


export default withStyles( styles )( Routes );