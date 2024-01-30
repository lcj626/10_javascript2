import { Navigate } from "react-router-dom";
import MenuModifyForm from "../components/form/MenuModifyFrom";


const MenuModify = () =>{

    const loginStatus = !!localStorage.getItem("isLogin");

    if(!loginStatus){
        return <Navigate to="/login" replace={true}/>
    }

    return(
        <>
            <h1>메뉴 수정하기 페이지</h1>
            <MenuModifyForm/>
        </>
    )
}

export default MenuModify;