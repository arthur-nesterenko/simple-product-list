import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory';
import sagas from './sagas';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore( {}, history );

store.runSaga( sagas );


ReactDOM.render(
    <App history={history} store={store}/>,
    document.getElementById( 'root' ) );

registerServiceWorker();
