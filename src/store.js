import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";



const sagaMiddleware = createSagaMiddleware( );

const isProd =  process.env.NODE_ENV === 'production';




const logger = () => 
 createLogger( {
      stateTransformer: ( state ) =>  state.toJS(),
      collapsed       : true,
      predicate       : ( getState, action ) => !~action.type.indexOf( '@@redux-form/' )
    } )
  


    

const configureStore = ( preloadedState, history ) => {

  const middlewares = [ sagaMiddleware, routerMiddleware( history ), !isProd ? logger() : null ];

  const enhancers = [
    applyMiddleware( ...middlewares ),
  ];


  const store = createStore(
    rootReducer,
    fromJS( preloadedState ),
    compose( ...enhancers )
  );

  store.runSaga = sagaMiddleware.run;
 

  return store;
};


export default configureStore;