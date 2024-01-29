import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/digimons" element={<Digimons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
