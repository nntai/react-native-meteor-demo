import {combineReducers} from 'redux';
import initState from './initialState';
import app from './app.js'

const reducers = combineReducers({
    initState,
    app
});

export default reducers;