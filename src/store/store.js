import {combineReducers} from 'redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import {auth, user} from '../store/reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth,
  user,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware)),
);

export default store;
