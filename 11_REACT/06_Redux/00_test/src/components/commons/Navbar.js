import { NavLink } from "react-router-dom"


const Navbar = () =>{
    return (
        <div>
            <ul>
                <li><NavLink to="/">메인 화면</NavLink></li>
                <li><NavLink to="/digimons">디지몬 목록</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;