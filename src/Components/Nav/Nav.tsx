import React, { useState } from "react";
import { sendnaw_logo } from "../../Assets";
import { NavLink } from "react-router-dom";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import "./nav.css";

type Props = {};

const Nav = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="bg-white border-b md:shadow-md z-50 w-full fixed top-0">
        <nav className="flex md:w-[750px] lg:w-[900px] xl:w-[1200px] px-4 nav h-[70px]  items-center  relative">
          <div className="flex max-md:px-[10px] md:px-[35px] lg:px-[55px] xl:px-[76px] w-full items-center">
            <div className="text-lg font-bold md:py-0 py-4 flex content-center my-auto">
              <img src={sendnaw_logo} alt="logo" className="h-10 w-10" />

            </div>
            <ul
              className={`px-4 md:px-2 ml-auto font-[500] text-lg md:flex md:space-x-2  bg-white absolute md:relative top-full left-0 right-0  ${
                sidebarOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    `flex text-textPurple justify-between md:inline-flex md:py-2 py-4 px-4 items-center hover:bg-gray-50 space-x-2 ${
                      isPending ? "pending" : isActive ? "active" : ""
                    }`
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li className="relative parent">
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="flex text-textPurple cursor-pointer justify-between md:inline-flex md:py-2 py-4 px-4 items-center hover:bg-gray-50 space-x-2"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li className="relative parent">
                <Link
                  to="Features"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset for handling fixed header
                  duration={500}
                  className="flex text-textPurple justify-between md:inline-flex cursor-pointer  lg:mb-0 md:py-2 py-4 px-4 items-center hover:bg-gray-50 space-x-2"
                >
                  <span>Features</span>
                </Link>
              </li>
              <li className="relative parent">
                <Link
                  to="faq" // ID of the target section
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset for handling fixed header
                  duration={500}
                  className="flex text-textPurple cursor-pointer justify-between md:inline-flex md:py-2 py-4 px-4 items-center hover:bg-gray-50 space-x-2"
                >
                  <span>FAQ's</span>
                </Link>
              </li>
            </ul>
            <div
              className="ml-auto mt-2 md:hidden text-gray-500 cursor-pointer"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 text-[#110319] fill-current ${
                  sidebarOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-7 h-7 text-[#110319] fill-current ${
                  sidebarOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 5h22v2H1V5zm0 6h22v2H1v-2zm0 6h22v2H1v-2z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
