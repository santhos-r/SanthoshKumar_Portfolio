import classes from "./NavBar.module.css";
import { navLinks } from "../../Constants";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/Theme";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    console.log("element", element)
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };


  return (
    <nav className={classes.navbar}>
      <button
        type="button"
        onClick={toggleNavList}
        className={`btn btn--icon ${classes.nav__hamburger}`}
        // className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
      <button
        type="button"
        onClick={toggeltheme}
        className={`btn btn--icon`}
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}>
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <ul className={classes.nav__list} style={{ display: showNavList ? "flex" : null }} >
        {navLinks.map((nav, index) => (
          <li className={classes.nav__listitem}
            key={nav.id}
            // onClick={() => setActive(nav.title)}

            onClick={() => toggleNavList(`#${nav.id}`)}
          >
            <a className="link link--nav" href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav >

  );
};

export default NavBar;
