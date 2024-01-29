/*
 * react-router-dom: react 프로젝트의 router를 처리할 수 있도록 하는 것 이다(페이지 이동과 같은 기능을 수행)
 * redux: 전역공간에 1가지의 상태를 두어 애플리케이션의 유지 보수성을 증가하기 위한 기술
 * react-redux: redux를 react에서 사용할 수 있도록 별도의 혹스를 사용하기 위한 lib
 * redux-actions: redux의 reducer를 정의하기 위해서 사용하는 lib
 * redux-thunk: 비동기 작업을 처리할 때 사용하는 미들웨어
 * redux-logger: 미들웨어에서 state의 상태 변화 및 action을 로그로 남겨 상태를 볼 수 있도록 함
 * redux-devtools-extension: 크롬의 별도 extension으로 설치되어 리덕스가 가지고 있는 장점 중 하나인 타임스냅샷?(시간에 따라 state 상태변화 내용을 기록함)을 이용하여 이전의 상태로 돌아가거나 현재의 상태를 표시하는 틀
*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { GET_POKEMONS } from "./modules/PokemonModule";
import Main from "./page/Main";
import Pokemons from "./page/Pokemon";

 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="pokemons" element={<Pokemons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
