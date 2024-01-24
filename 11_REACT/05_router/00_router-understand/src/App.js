import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./page/Main";
import Post from "./page/Post";
import PostDetail from "./page/PostDeatil";
import SearchPost from "./page/SearchPost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="post">
            <Route index element={<Post/>}/>
            <Route path=":index" element={<PostDetail/>}/>
            <Route path="search" element={<SearchPost/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
