import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { resetloginUser } from "../../modules/UserModule";


const Navbar = () =>{
    
    const loginStatus = !!localStorage.getItem("isLogin");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () =>{
        localStorage.removeItem("isLogin");
        dispatch(resetloginUser());
        navigate("/");
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/">메인으로</NavLink></li>
                <li><NavLink to="/menu">메뉴보기</NavLink></li>
                { !loginStatus ? (
                  <li><NavLink to="/login">로그인</NavLink></li>
                ) :(
                  <li onClick={logoutHandler}><a href="">로그아웃</a></li>
                )
                  
                }
            </ul>
        </div>
    )
}

export default Navbar;