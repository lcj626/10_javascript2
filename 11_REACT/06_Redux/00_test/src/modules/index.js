import { combineReducers } from "redux";
import digimonReducer from "./DigimonModule";


const rootReducer = combineReducers({ // state 상태 변경하는 reducer 들 한데 묶음
    digimonReducer
});

export default rootReducer;