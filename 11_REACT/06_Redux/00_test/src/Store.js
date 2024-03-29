import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";


const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;