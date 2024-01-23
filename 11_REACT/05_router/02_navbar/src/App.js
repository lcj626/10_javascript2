import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Login from "./page/Login";
import Layout from "./layouts/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="mypage" element={<MyPage/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
