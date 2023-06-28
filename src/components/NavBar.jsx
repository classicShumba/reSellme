import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/resellme-logo.svg";
import { ReactComponent as Sun } from "../assets/images/sun.svg";
import { ReactComponent as Tabler } from "../assets/images/tabler_window.svg";
import { useState } from "react";
import { DarkMode, Search } from "@mui/icons-material";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState("burger-open");

  const handleBurger = () => {
    burgerOpen === "burger-open"
      ? setBurgerOpen("burger-close")
      : setBurgerOpen("burger-open");
  };

  const [ icon, setIcon ] = useState(false);

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  }
  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  }
  const toggleTheme = () => {
    setIcon(!icon)
    icon ? setLightMode() : setDarkMode()
  }

  return (
    <header className="wrapper">
      <nav className={burgerOpen === "burger-close" ? "nav-open" : ""}>
        <Logo className="logo" />
        <ul className="menu">
          <li>
            <NavLink to="/">Docs</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li className="about-link">
            <NavLink to="/">About Us</NavLink>
          </li>

          <li className="tabler">
            <NavLink to="/">
              Support
              <Tabler />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Portal
              <Tabler />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Register
              <Tabler />
            </NavLink>
          </li>
          <span className="mode-toggle" onClick={()=>{toggleTheme()}} onChange={toggleTheme} >
            { icon ? <Sun className="icon" /> : <DarkMode className="icon" /> }
          </span>
          <span className="search">
            <Search />
            <input type="search" placeholder="Search" />
          </span>
        </ul>

        <div className="hamburger">
          <p>Menu</p>
          <div className={"burger " + burgerOpen} onClick={handleBurger}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
