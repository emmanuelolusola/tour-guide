import React, { useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" />
              Tour Guide
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex ">
            <li className="navItems">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </ul>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <HiMenuAlt3 className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
