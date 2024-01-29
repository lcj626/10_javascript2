import { createActions, handleActions } from "redux-actions";


const initialState = [
    {
        id:0,
        name:""
    }
];

export const GET_POKEMONS = "pokemons/GET_POKEMONS";

const actions = createActions({// dispatch에 호출할 메소드
    [GET_POKEMONS]: () => {}
});

console.log('pokemonActions : ', actions);

const pokemonReducer = handleActions({
    [GET_POKEMONS] : (state, {payload}) =>{
        console.log("payload : " + payload);

        return payload;
    }
}, initialState);

export default pokemonReducer;