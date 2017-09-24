import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import Routing from './routes'
import withPreloadData from './common/hoc/with-preload-data'

const Component = withPreloadData(Routing);

const App = ({store,history}) =>  (
  <Provider store={store}>
   <ConnectedRouter history={history}>
      <Component/>
  </ConnectedRouter>
</Provider>
);



export default App;
