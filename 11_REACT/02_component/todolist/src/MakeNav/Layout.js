import { Outlet } from "react-router-dom"
import Introduction from "./Header"
import Navbar from "./Navbar"


const Layout = () =>{

    return (
        <>
          <Introduction/>
          <Navbar/>
          <Outlet/>
        </>
    )
}

export default Layout;