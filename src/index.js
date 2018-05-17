import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/** Importando Redux */
import { createStore } from "redux";
import { Provider } from "react-redux";

/** Importando Reducer */
import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
// registerServiceWorker();
