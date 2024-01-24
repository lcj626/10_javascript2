import { NavLink } from "react-router-dom"


const Navbar = () =>{
    const activeStyle ={
        backgroundColor : 'red',
        color: 'white'
    }

    return (
        <div>
            <ul>
                <li><NavLink to={"/main"} style={({isActive})=>isActive? activeStyle:null}>메인</NavLink></li>
                <li><NavLink to={"/post"} style={({isActive})=>isActive? activeStyle:null}>게시글</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;