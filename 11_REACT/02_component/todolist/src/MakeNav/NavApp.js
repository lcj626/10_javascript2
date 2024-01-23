import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileInfo from "./MyProfile";
import ListSkills from "./MySkills";
import MyProject from "./MyProject";
import Layout from "./Layout";



function NavApp(){

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<ProfileInfo/>}/>
              <Route path="profile" element={<ProfileInfo/>}/>
              <Route path="skills" element={<ListSkills/>}/>
              <Route path="project" element={<MyProject/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default NavApp;