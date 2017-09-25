import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import Routing from './routes'
import {withRouter} from 'react-router-dom';


const ComponentWitRouter = withRouter(Routing)

const App = ({store,history}) =>  (
  <Provider store={store}>
   <ConnectedRouter history={history}>
      <Routing/>
  </ConnectedRouter>
</Provider>
);



export default App;
