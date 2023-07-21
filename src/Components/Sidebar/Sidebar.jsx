import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Assets/profile.png";
import logo from "../../Assets/logo.png";
import { BiLogOut, BiLayout, BiHeart } from "react-icons/bi";
import { TbLayoutGridAdd, TbCube, TbMessages, TbUsers } from "react-icons/tb";
import { LuCircleDot, LuFile, LuLayoutGrid } from "react-icons/lu";
import { PiBasket, PiShootingStarLight, PiLightbulbThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { LiaFlagUsaSolid } from "react-icons/lia";
import "./Sidebar.css";
const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div id="sidebar" className={toggle ? "hide" : ""}>
        <Link href="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link href="/">
              <HiOutlineHome />
              <span className="text">Dashboards</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <TbLayoutGridAdd />
              <span className="text">Widgets</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiLayout />
              <span className="text">Page Layout</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <LuCircleDot />
              <span className="text">Project</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <LuFile />
              <span className="text">File Manager</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <TbCube />
              <span className="text">Kanban Board</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <PiBasket />
              <span className="text">E-commerce</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <GoMail />
              <span className="text">Letter Box</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <TbMessages />
              <span className="text">Chat</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <TbUsers />
              <span className="text">Users</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiHeart />
              <span className="text">Bookmarks</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="logout">
              <BiLogOut />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div id="content">
        <nav>
          <div>
            <LuLayoutGrid
              className="menuIcon"
              onClick={() => setToggle(!toggle)}
            />
            <Link href="/" className="nav-link">
              🔥 Something you love is now on sale ! <span>Buy now !</span>
            </Link>
          </div>
          <div>
            <Link href="/" className="lang">
              <LiaFlagUsaSolid /> EN
            </Link>
            <Link href="/" className="navIcon">
              <CiSearch />
            </Link>
            <Link href="/" className="navIcon">
              <PiShootingStarLight />
            </Link>
            <Link href="/" className="navIcon">
              <PiLightbulbThin />
            </Link>
            <Link href="/" className="cart">
              <CiShoppingBasket />
              <span className="numCart number">2</span>
            </Link>
            <Link href="/" className="notification">
              <BsBell />
              <span className="num number">4</span>
            </Link>
            <Link href="/" className="profile">
              <img src={user} />
              <div>
                <p>Emay Walter</p>
                <p>
                  Admin <GoChevronDown />
                </p>
              </div>
            </Link>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
