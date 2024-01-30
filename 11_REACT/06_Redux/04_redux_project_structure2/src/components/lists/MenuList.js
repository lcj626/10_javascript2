import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callGetMenuListAPI } from "../../api/MenuAPICalls";
import MenuItem from "../items/MenuItem";


const MenuList = () => {
    const result = useSelector(state => state.menuReducer); // state.menuReducer로 상태값 변환
    const menuList = result.menuList;
    const dispatch = useDispatch(); // redux 액션 호출 상태 업데이트

    console.log(menuList);

    useEffect(() =>{
        dispatch(callGetMenuListAPI()); //callGetMenuListAPI 를 호출
    },[]) // 컴포넌트가 처음 렌더링 될때만

    return (
        menuList && (
            <div className="menuBox">
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
            </div>
        )
    )
}

export default MenuList;