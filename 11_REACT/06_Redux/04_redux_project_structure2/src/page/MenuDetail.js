import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Menus from "./Menu";
import { callDeleteMenuAPI } from "../api/MenuAPICalls";


const MenuDetail = () =>{
    const loginStatus = !!localStorage.getItem("isLogin");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(()=>{
        if(result.delete){
            alert("메뉴 삭제");
            navigate("/menu");
        }
    },[result])

    return (
        <div>
            <h1>메뉴 상세</h1>
            <h1>
                {/* 로그인 된 상황에서만 button이 보이도록 조건부 랜덜이 */}
                {
                    (loginStatus) && <>
                          <button onClick={updateHandler}>메뉴 수정</button>
                          <button onClick={deleteHandler}>메뉴 삭제</button>
                    </>
                }
            </h1>
            <Menus id={id}/>
        </div>
    );
}

export default MenuDetail;