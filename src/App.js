import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import Routing from './routes';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
});




const App = ( { store, history } ) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routing/>
        </ConnectedRouter>
    </Provider>
);


export default  withStyles(styles)(App);
