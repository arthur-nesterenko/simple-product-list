import React from 'react';
import routes from './screens/routes';
import RouteWithSubRoutes from './utils/router-render';
import { Switch } from 'react-router-dom';
import Navbar from './common/navbar/components/navbar';
import Grid from 'material-ui/Grid';

const Routes = () => (
    <div>
        <Grid container>
            <Grid item xs={12} sm={12} md={2} lg={2}>
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
    </div>
);


export default Routes;