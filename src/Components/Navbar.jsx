import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import "./Navbar.css";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { hash } = useLocation();

  const [toggleIcon, setToggleIcon] = useState(false);

  let items = [
    {
      id: "1a",
      name: "Home",
      path: "#home",
    },
    {
      id: "2b",
      name: "About",
      path: "#about",
    },
    {
      id: "3c",
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      id: "4d",
      name: "Skills",
      path: "#skills",
    },
    {
      id: "5e",
      name: "Contact",
      path: "#contact",
    },
    {
      id: "6f",
      name: "Resume",
      path: "#resume",
    },
  ];
  function handleClick() {
    if (toggleIcon) {
      setToggleIcon(false);
    }
  }

  return (
    <>
      <nav className="fixed w-full z-10 flex justify-between items-center text-[#ffdd40] text-lg h-16">
        <HashLink
          smooth
          to="#home"
          className="text-[#5a76a4] font-[Sriracha] logo  pl-4 text-5xl"
        >
          NC
        </HashLink>

        <ul
          className={`Navbar text-white flex justify-center items-center pr-4  gap-4 ${
            toggleIcon ? "left-0 bg-[#181818]" : ""
          }`}
          id="ul"
        >
          {items.map((item) => (
            <li key={item.id} onClick={handleClick}>
              <NavHashLink
                smooth
                to={item.path}
                className={`border border-[#5a76a4] rounded-2xl px-4 py-1 ${
                  hash === item.path ? "active-link" : ""
                }`}
              >
                {item.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setToggleIcon(!toggleIcon)}
          className="hidden hover:text-[#5a76a4] absolute right-0 pr-4"
          id="toggle"
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
