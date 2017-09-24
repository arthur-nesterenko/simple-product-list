import React from 'react';
import routes from './screens/routes';
// import Navigation from './common/navbar/containers/navbar-container';
import RouteWithSubRoutes  from './utils/router-render';
import {  Switch } from 'react-router-dom';


const Routes = ( ) => (
  <div>
    {/* <Navigation pathname={pathname}/> */}
    <Switch>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </Switch>
  </div>
);


export default Routes