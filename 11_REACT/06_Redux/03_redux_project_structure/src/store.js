import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";
import  { thunk } from 'redux-thunk';
import rootReducer from "./modules";

const store = legacy_createStore(
    rootReducer, // 디렉토리가 index로 설정해 놓으면 그냥 최상위권 폴더가 디렉토리로 나타남
    composeWithDevTools(applyMiddleware(thunk)) // 데브툴에 미들웨어 등록해서 state의 상태변화를 모니터링
);



// const store = configureStore({
//     reducer: rootReducer
//     middleware : () =>[tunk,]
// })


// const rootReducer = combineReducers({
//     "action" : (state, {payload}) =>{
//         console.log("payload : ", payload);
//         return payload;
//     }
// })

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))
// )

export default store;