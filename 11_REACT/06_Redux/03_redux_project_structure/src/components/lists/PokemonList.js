import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPokemonsAPI } from "../../api/PokemonAPICalls";
import PokemonCard from "../items/PokemonCard";


const PokemonList = () =>{

    const result = useSelector(state => state.pokemonReducer); // pokemonReducer state 중 하나 꺼내옴
    console.log("pokemons : " + result);

    const pokemons = result.results;
    console.log("pokemons result : " +pokemons);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(callGetPokemonsAPI()) // 기본 상태 호출
    },[]);

    return (
        pokemons && (
            <div>
                <h3>총 포켓몬 수 : {result.count}</h3>
                <button onClick={() => dispatch(callGetPokemonsAPI(result.prev))}>이전</button> {/*헤이투스 페이지네이션과 비슷한 효과*/}
                <button onClick={() => dispatch(callGetPokemonsAPI(result.next))}>다음</button>
                {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}/>)}
            </div>
        )
    )
}

export default PokemonList;