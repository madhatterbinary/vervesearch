import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import initReducer from './store/reducers/init';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(initReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = ( 
	<Provider store={store}>
       <App />
	</Provider>
); 
ReactDOM.render(app, document.querySelector('.container'));
