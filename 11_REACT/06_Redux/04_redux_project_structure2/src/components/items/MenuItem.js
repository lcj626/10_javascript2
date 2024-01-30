import { Link } from "react-router-dom"


const MenuItem = ({menu}) =>{ // 메뉴리스트에서 직접적으로 보여주는 항목을 설정한 함수
    return (

        <Link to={`/menu/${menu.id}`}>
            <div className="menuItem">
                <h3>이름 : {menu.menuName}</h3>
                <h3>가격 : {menu.menuPrice}</h3>
                <h3>종류 : {menu.categoryName}</h3>
            </div>
        </Link>
    )
}

export default MenuItem;