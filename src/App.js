import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import Routing from './routes'


const App = ({store,history}) =>  (
  <Provider store={store}>
   <ConnectedRouter history={history}>
      <Routing/>
  </ConnectedRouter>
</Provider>
);



export default App;
