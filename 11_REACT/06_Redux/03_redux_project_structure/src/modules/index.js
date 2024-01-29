import { combineReducers } from "redux";
import pokemonReducer from "./PokemonModule";

const rootReducer = combineReducers({ //state 상태를 조작할 수 있는 reducer 들을 묶어 줌
    pokemonReducer
});

export default rootReducer;