import { rootReducer } from "../reducers";
import { applyMiddleware, createStore } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whilelists:['persistedReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = createStore(persistedReducer, applyMiddleware(thunk))
export default store;