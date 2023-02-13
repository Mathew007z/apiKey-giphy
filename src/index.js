import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store)

root.render(

    <PersistGate persistor={persistor}>
         <Provider store={store}>
            <App/>
        </Provider>
    </PersistGate>
     
);
