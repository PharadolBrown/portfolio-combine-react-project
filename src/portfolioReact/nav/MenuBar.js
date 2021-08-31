import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import style from "./MenuBar.css";

export default function MenuBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //คล้าย toggle
  const closeMobileMenu = () => setClick(false);
  

  return (
    <nav className="header w-full shadow-md py-2 fixed top-0 bg-black bg-opacity-80 lg:bg-opacity-60 text-white">
      <div className="container w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <div className="header-con h-8 flex items-center justify-center lg:justify-between">
          <div className="logo-container">
            <a href="#" className="font-bold">PortfolioBrown</a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link">
              <a href="#header" onClick={closeMobileMenu}>
                HEADER
              </a>
            </li>
            <li className="menu-link">
              <a href="#about" onClick={closeMobileMenu}>
                ABOUT
              </a>
            </li>
            <li className="menu-link">
              <a href="#skill" onClick={closeMobileMenu}>
                SKILL
              </a>
            </li>
            <li className="menu-link">
              <a href="#achievement" onClick={closeMobileMenu}>
                ACHIEVEMENT
              </a>
            </li>
            <li className="menu-link">
              <a href="#contact" onClick={closeMobileMenu}>
                CONTACT
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="mobile-menu absolute left-6 md:left-10 cursor-pointe text-white lg:hidden"
            onClick={handleClick}
          >
            {click ? <FiX /> : <FiMenu />}
          </a>
        </div>
      </div>
    </nav>
  );
}
