import React from 'react';
import routes from './screens/routes';
import RouteWithSubRoutes  from './utils/router-render';
import {  Switch } from 'react-router-dom';
import Navbar from './common/navbar/components/navbar'

const Routes = ( ) => (
  <div>
   <Navbar/>
    <Switch>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </Switch>
  </div>
);


export default Routes