import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import user from "../../Assets/user.webp";
import {
  BiDotsVertical,
  BiSearchAlt2,
  BiFilter,
  BiSolidCloudDownload,
  BiSolidGroup,
} from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Sidebar>
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <BsChevronRight />
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <BiSolidCloudDownload />
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <SlCalender />
              <span className="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <BiSolidGroup />
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <RiMoneyDollarBoxFill />
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <BiSearchAlt2 />
                <BiFilter />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={user} />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user} />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user} />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status process">Process</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user} />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user} />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todo</h3>
                <BiSearchAlt2 />
                <BiFilter />
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  <BiDotsVertical />
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <BiDotsVertical />
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <BiDotsVertical />
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <BiDotsVertical />
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <BiDotsVertical />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Sidebar>
    </div>
  );
};

export default Home;
