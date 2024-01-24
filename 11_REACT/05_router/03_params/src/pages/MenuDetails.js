import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMenuDetails } from "../api/MenuApi";


const MenuDetails = () =>{
    const {menuCode} = useParams(); // pathvariable로 넘어오는 것을 자동으로 받는다
    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : '',
        categoryName : '',
        detail : {}
    });

    useEffect(()=>{
        // console.log(menuCode);
        // console.log(getMenuDetails(menuCode));
        setMenu(getMenuDetails(menuCode)); // searchmenu 초기화
        // console.log("menu~~");
        // console.log(menu);
    },[]);

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 : {menu.menuName}</h3>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 카테고리 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{maxWidth:500}}/>
        </>
    )
}

export default MenuDetails;