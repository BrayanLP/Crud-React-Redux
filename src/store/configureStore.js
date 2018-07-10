import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import reducer from '../reducers';
// import * as actionCreators from '../actions/counter';
import { reducer as formReducer } from 'redux-form';

export let isMonitorAction;
const reducers = combineReducers({
    // ... your other reducers here ...
    form: formReducer, // <---- Mounted at 'form'
    reducer,
});

export default function configureStore(preloadedState) {
    // const composeEnhancers = composeWithDevTools({ actionCreators });
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(invariant(), thunk)),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
