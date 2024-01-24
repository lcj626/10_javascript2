import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/Menuitem";
import boxStyle from "./Menu.module.css";


const Menu = () =>{
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate(); // 페이지 라우터 요청을 보낼때 자주 씀

    useEffect(
        ()=>{
            setMenuList(getMenuList());
        },[]
    );

    const onClickHandler = () =>{
        navigate(`/menu/search?menuName=${searchValue}`);
    }
    return (
        <>
          <h1>판매 메뉴 목록</h1>
          <div>
              <input type="search" name="menuName" onChange={e => {setSearchValue(e.target.value)}}/>
              <button onClick={onClickHandler}>검색</button>
          </div>
          <div className={boxStyle.MenuBox}>
              {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
          </div>
        </>
    )
}

export default Menu;