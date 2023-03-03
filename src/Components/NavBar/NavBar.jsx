import classes from "./NavBar.module.css";
import { navLinks } from "../../Constants";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/Theme";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

const NavBar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };


  return (
    <nav className={classes.navbar}>
      {/* <button
        type="button"
        onClick={toggeltheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}
      >
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button> */}

      <button
        type="button"
        onClick={toggeltheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}>
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <ul className={classes.ul}>
        {navLinks.map((nav, index) => (
          <li className="navbarmenu"
            style={{ display: showNavList ? "flex" : null }}
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
