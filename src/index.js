import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Importando Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Importando Componentes
import App from './App';

// Importando Reducer 
import reducers from "./reducers";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
// registerServiceWorker();
