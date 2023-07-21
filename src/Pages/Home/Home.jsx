import React, { useCallback, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import demo from "../../Assets/cartoon.svg";
import { BiHome } from "react-icons/bi";
import { CiSettings, CiMedicalCase, CiShoppingCart } from "react-icons/ci";
import {
  PiPaintBucketThin,
  PiKeyReturnThin,
  PiCurrencyCircleDollarLight,
} from "react-icons/pi";
import { MdOutlineTune } from "react-icons/md";
import { FiShoppingCart, FiUserPlus, FiUserMinus } from "react-icons/fi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import {
  BsTruck,
  BsClipboardMinus,
  BsDownload,
  BsArrowUpLeft,
  BsArrowDownRight,
} from "react-icons/bs";
import { AiOutlineTag, AiOutlineLineChart } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  LineChart,
  Line,
  Cell,
} from "recharts";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";

import "./Home.css";

const data = [
  { name: "1", Earning: 300, Expense: 456 },
  { name: "2", Earning: 100, Expense: 321 },
  { name: "3", Earning: 9, Expense: 235 },
  { name: "4", Earning: 53, Expense: 267 },
  { name: "5", Earning: 43, Expense: 45 },
  { name: "6", Earning: 222, Expense: 366 },
  { name: "7", Earning: 372, Expense: 486 },
  { name: "8", Earning: 182, Expense: 512 },
  { name: "9", Earning: 164, Expense: 302 },
  { name: "10", Earning: 316, Expense: 425 },
  { name: "11", Earning: 131, Expense: 467 },
  { name: "12", Earning: 154, Expense: 33 },
  { name: "13", Earning: 205, Expense: 354 },
  { name: "14", Earning: 70, Expense: 258 },
  { name: "15", Earning: 53, Expense: 267 },
  { name: "16", Earning: 43, Expense: 45 },
  { name: "17", Earning: 222, Expense: 366 },
  { name: "18", Earning: 372, Expense: 486 },
  { name: "19", Earning: 53, Expense: 267 },
  { name: "20", Earning: 43, Expense: 45 },
];

const lineData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JuneF",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const pieData = [{ name: "Group A", value: 400 }];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Home = () => {
  return (
    <div>
      <Sidebar>
        <div className="main">
          <div className="float">
            <Tooltip placement="leftTop" color="#7366ff" title="Check layouts">
              <PiPaintBucketThin />
            </Tooltip>
            <Tooltip placement="leftTop" color="#7366ff" title="Quick option">
              <CiSettings />
            </Tooltip>
            <Tooltip placement="leftTop" color="#7366ff" title="Support">
              <CiMedicalCase />
            </Tooltip>
            <Tooltip placement="leftTop" color="#7366ff" title="Document">
              <CiSettings />
            </Tooltip>
            <Tooltip placement="leftTop" color="#7366ff" title="Check features">
              <MdOutlineTune />
            </Tooltip>
            <Tooltip placement="leftTop" color="#7366ff" title="Buy now">
              <CiShoppingCart />
            </Tooltip>
          </div>

          <div className="head-title">
            <div className="head-left">Default</div>
            <div className="head-right">
              <BiHome /> <p>/ Dashboard</p> <span>/ Default</span>
            </div>
          </div>

          <div className="overview">
            <div className="overview-left">
              <div>
                <h2> Welcome to cuba</h2>
                <p>Here whats happing in your account today</p>
              </div>
              <div>
                <button>Whats New !</button>
              </div>
              <img src={demo} alt="" />
            </div>
            <div className="overview-right">
              <li>
                <div>
                  <FiShoppingCart />
                </div>
                <span className="text">
                  <h3>10,000</h3>
                  <p>Purchase</p>
                </span>
              </li>
              <li>
                <div>
                  <PiKeyReturnThin />
                </div>
                <span className="text">
                  <h3>7,000</h3>
                  <p>Sales return</p>
                </span>
              </li>
              <li>
                <div>
                  <BsTruck />
                </div>
                <span className="text">
                  <h3>180k</h3>
                  <p>Orders</p>
                </span>
              </li>
              <li>
                <div>
                  <AiOutlineTag />
                </div>
                <span className="text">
                  <h3>4,200</h3>
                  <p>Sales</p>
                </span>
              </li>
              <li>
                <div>
                  <BsClipboardMinus />
                </div>
                <span className="text">
                  <h3>5,700</h3>
                  <p>Purchase rate</p>
                </span>
              </li>
              <li>
                <div>
                  <AiOutlineLineChart />
                </div>
                <span className="text">
                  <h3>690k</h3>
                  <p>profit</p>
                </span>
              </li>
            </div>
          </div>
          <div className="charts">
            <div className="lineChart">
              <div className="chartHead">
                <p>Overall Balance</p>
              </div>
              <div className="chartBox">
                <div className="chartOne">
                  <ResponsiveContainer>
                    <BarChart width={200} height={300} data={data}>
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Legend
                        verticalAlign="top"
                        wrapperStyle={{ lineHeight: "40px" }}
                      />
                      <ReferenceLine y={0} stroke="#000" />
                      <Bar dataKey="Earning" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="chartTwo">
                  <div>
                    <BsDownload />
                    <div>
                      <p>Income</p>
                      <h4>$22,678</h4>
                    </div>
                    <p>+$456</p>
                  </div>
                  <div>
                    <LiaHandHoldingUsdSolid />
                    <div>
                      <p>Expense</p>
                      <h4>$12,057</h4>
                    </div>
                    <p>+$256</p>
                  </div>
                  <div>
                    <PiCurrencyCircleDollarLight />
                    <div>
                      <p>Cashback</p>
                      <h4>8,475</h4>
                    </div>
                    <p>+$256</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pieChart">
              <div className="chartHead">
                <p>Recent Orders</p>
              </div>
              <div className="pieBox">
                <ResponsiveContainer>
                  <PieChart width={800} height={400}>
                    <Pie
                      data={pieData}
                      innerRadius={80}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="pieData">
                  <span>100</span>
                  <p>Total Profit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div>
              <div className="chartHead">
                <p>Activity</p>
              </div>
              <VerticalTimeline layout="1-column-left" lineColor="lightblue">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(33, 150, 243)",
                  }}
                  date="8th March, 2022"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<LiaHandHoldingUsdSolid />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Updated Product
                  </h3>{" "}
                  <p>Creative Direction, User Experience, Visual...</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="8th March, 2022"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<LiaHandHoldingUsdSolid />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Updated Product
                  </h3>{" "}
                  <p>Creative Direction, User Experience, Visual...</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
            <div>
              <div className="chartHead">
                <p>Recent Sales</p>
              </div>
              <div className="recentSales">
                <div>
                  <div>
                    <img
                      src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                      alt="user"
                    />
                    <div>
                      <p>Jane Cooper</p>
                      <span>10 minutes ago</span>
                    </div>
                  </div>
                  <p>$200.00</p>
                </div>
                <div>
                  <div>
                    <img
                      src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                      alt="user"
                    />
                    <div>
                      <p>Jane Cooper</p>
                      <span>10 minutes ago</span>
                    </div>
                  </div>
                  <p>$200.00</p>
                </div>
                <div>
                  <div>
                    <img
                      src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                      alt="user"
                    />
                    <div>
                      <p>Jane Cooper</p>
                      <span>10 minutes ago</span>
                    </div>
                  </div>
                  <p>$200.00</p>
                </div>
                <div>
                  <div>
                    <img
                      src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                      alt="user"
                    />
                    <div>
                      <p>Jane Cooper</p>
                      <span>10 minutes ago</span>
                    </div>
                  </div>
                  <p>$200.00</p>
                </div>
                <div>
                  <div>
                    <img
                      src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                      alt="user"
                    />
                    <div>
                      <p>Jane Cooper</p>
                      <span>10 minutes ago</span>
                    </div>
                  </div>
                  <p>$200.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lastSection">
            <div className="leftSection">
              <div className="totalUser">
                <div className="chartHead">
                  <p>Total Users</p>
                </div>
                <div className="totalUserData">
                  <div>
                    <div>
                      <FiUserPlus />
                    </div>
                    <div>
                      <h3>178,098</h3>
                      <p>
                        <BsArrowUpLeft />
                        +30.89
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <FiUserMinus />
                    </div>
                    <div>
                      <h3>178,098</h3>
                      <p>
                        <BsArrowDownRight />
                        -08.89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="followersGrowth">
                <div className="chartHead">
                  <p>Followers Growth</p>
                </div>
                <div className="LineChart">
                  <ResponsiveContainer>
                    <LineChart width={500} height={300} data={lineData}>
                      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="paperNote">
              <div className="chartHead">
                <p>Paper Note</p>
              </div>
              <div className="paperNoteData">
                <img
                  src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/papernote.jpg"
                  alt="img"
                />
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div>
                  <button>SAAS</button>
                  <button>E-commerce</button>
                  <button>Crypto</button>
                  <button>Project</button>
                  <button>SAAS</button>
                  <button>+9</button>
                </div>
                <div className="userList">
                  <Avatar.Group
                    maxCount={5}
                    size="large"
                    maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                  <span>$239,098 (Budget)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="homeFooter">
            Copyright 2023 © Cuba theme clone by Piyush Agrawal
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Home;
