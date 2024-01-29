import { createActions, handleActions } from "redux-actions";


const initialState = [
    {
      id:0,
      name:"",
      images : {
          href:""
      }
    }
];

export const GET_DIGIMONS = "digimons/GET_DIGIMONS";

const actions = createActions({
    [GET_DIGIMONS]: () =>{}
});

console.log('digimonActions : ', actions);

const digimonReducer = handleActions({
    [GET_DIGIMONS]: (state, {payload}) =>{
        console.log("payload : " + payload)

        return payload;
    }
},initialState) // initialState= 초기 상태 제공

export default digimonReducer;