import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Assets/user.webp";
import {
  BiSolidDashboard,
  BiStore,
  BiSolidPieChart,
  BiMessageRoundedDots,
  BiSolidGroup,
  BiSolidCog,
  BiLogOut,
  BiSolidUser,
  BiSolidBellRing,
} from "react-icons/bi";
import { HiMenu, HiSearch } from "react-icons/hi";
import "./Sidebar.css";
const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div id="sidebar" className={toggle ? "hide" : ""}>
        <Link href="/" className="brand">
          <BiSolidUser />
          <span className="text">Admin</span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link href="/">
              <BiSolidDashboard />
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiStore />
              <span className="text">My Store</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiSolidPieChart />
              <span className="text">Analytics</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiMessageRoundedDots />
              <span className="text">Message</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <BiSolidGroup />
              <span className="text">Team</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link href="/">
              <BiSolidCog />
              <span className="text">Settings</span>
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
          <HiMenu className="menuIcon" onClick={() => setToggle(!toggle)} />
          <Link href="/" className="nav-link">
            Categories
          </Link>
          <form>
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <HiSearch />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <Link href="/" className="notification">
            <BiSolidBellRing />
            <span className="num">8</span>
          </Link>
          <Link href="/" className="profile">
            <img src={user} />
          </Link>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
