import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const NavbarButton = () => {
    setNavbar(!navbar);
  };

  return (
    <div className='nav'>
      <button className="navbar-btn" onClick={NavbarButton}>네비바</button>
      {navbar ? (
        <nav>
          <ul>
            <li><NavLink to={"/profile"}>내 프로필</NavLink></li>
            <li><NavLink to={"/skills"}>내 스킬들</NavLink></li>
            <li><NavLink to={"/project"}>내 프로젝트</NavLink></li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;