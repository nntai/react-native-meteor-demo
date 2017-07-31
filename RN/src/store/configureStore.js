import { createStore, applyMiddleware,compose } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {
    AsyncStorage
} from 'react-native';

import reducers from '../reducers/';
import thunk from 'redux-thunk';

let middleware = [thunk];

export default function configureStore() {
    let store = compose(applyMiddleware(...middleware), autoRehydrate())(createStore)(reducers);
    persistStore(store, {
        storage: AsyncStorage,
        blacklist: ['']
    });
    return store;
}