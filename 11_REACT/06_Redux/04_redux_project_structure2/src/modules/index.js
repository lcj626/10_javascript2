import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenusModule";


const rootReducer = combineReducers({
    userReducer,
    menuReducer
});

export default rootReducer;