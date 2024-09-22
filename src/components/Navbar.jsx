import React from "react";
import { Link, NavLink } from "react-router-dom";

//React icon link
import { FaBeer } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import "bootstrap/dist/css/bootstrap.min.css";
// import "../components/Navbar.css"
import LOGO from "../Assets/Logo.png";
import { Nav } from "react-bootstrap";
const Navbar = () => {
  return (
    <div>
      {/* <h4>Navbar</h4> */}
      <div className="row m-0 py-4 navigation">
        <div className=" col-lg-6 d-flex nav">
          <NavLink to={"/test"}>
            <img src={LOGO} height={35} width={50} />
          </NavLink>
          <Link to="/ringpage" className={"text-dark nav-link p-0"}>
            Rings
          </Link>
          <NavLink to={"/test"} className={"text-dark nav-link p-0"}>
            Earrings
          </NavLink>
          <NavLink to={"/test"} className={"text-dark nav-link p-0"}>
            Bracelets & Bangles
          </NavLink>
          <NavLink to={"/test"} className={"text-dark nav-link p-0"}>
            Solitairis
          </NavLink>
          <NavLink to={"/test"} className={"text-dark nav-link p-0 d-lg-block d-none"}>
            Manglesutras
          </NavLink>
          {/* <NavLink to={"/test"} className={"text-dark nav-link p-0"}>Nacklces</NavLink> */}
        </div>

        <div className="col-lg-6 d-flex justify-content-end">
          <div className="ms-4 me-4 input">
            {/* <input type="search" placeholder="search" style={{width:"200px"}} /> */}
            <button
              style={{
                backgroundColor: "violet",
                border: "2px solid violet",
                borderRadius: "5px",
              }}  
            >
              <IoSearch className="mt-2 mb-2 ms-3 me-3" />
            </button>
          </div>
          <NavLink className={"pincode me-4"}>
            Delivery & Stires <br /> Enter Pincode
          </NavLink>
          <NavLink className={"me-4"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7L25pqAuJCNl0_LuKt-AUvVqlR7x_QsejUA7QK_4nI0Yy7-dxw-lf2CvEBk3HeXm-mH8&usqp=CAU"
              height={20}
              width={40}
            />
          </NavLink>
          <div className="user_info">
            <FaUser className="me-4 mt-2" />
            <div className="info">
              <h6>
                <NavLink>Your Account </NavLink>
                <br />
                <NavLink>Access account & manage your orders </NavLink>
                <div>
                  <NavLink className={"userbtn mt-2"}>
                    <Link to={"/login"}>Login</Link>
                  </NavLink>
                  <NavLink className={"userbtn mt-2"}>
                    <Link to={"/signup"}>Sign Up</Link>
                  </NavLink>
                </div>
              </h6>
            </div>
          <FaHeart className="me-4 mt-2" />
          <NavLink>
          <Link to={"/addringproduct"}>
          <BsCartFill className="me-4 mt-2" />
          </Link>
          </NavLink>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
