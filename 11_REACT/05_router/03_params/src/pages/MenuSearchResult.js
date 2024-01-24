import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMenu } from "../api/MenuApi";
import boxStyle from "./Menu.module.css";
import MenuItem from "../components/Menuitem";

const MenuSearchResult = () =>{
    
    const [search] = useSearchParams();
    const searchMenuName = search.get("menuName"); // search 가 여러개 들어있는 묶음이니까 그 안에 들어있는 menuName 키를 get으로 뽑아온다
    const [menuList, setMenuList] = useState([]);

    /*
        pathVariable http:localhost/menu/30
        queryString Params http:localhost/menu?menuName="김치 튀김"&menuPrice=500
    */


    useEffect(
        () =>{
            setMenuList(searchMenu(searchMenuName)); // 꺼내온 value를 넣는 곳
        },[]
    )

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.Menubox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}
export default MenuSearchResult;