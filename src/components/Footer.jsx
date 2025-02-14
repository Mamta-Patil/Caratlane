import React from 'react'
import { NavLink } from 'react-router-dom'
// React icons
import { IoMdChatboxes } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
          {/* Footer */}
          <div className="footer bg-light ">
        <div className="row m-0 py-5 ">
          <div className="col-lg-2">
            <h6 className="text-dark">Know Your Jewellery</h6>
            <NavLink>JEWELLERY GUIDE</NavLink>
            <br />
            <NavLink>GEMSTONES GUIDE</NavLink>
            <br />
            <NavLink>Gold Rate</NavLink>
            <br />
            <NavLink>eGold</NavLink>
            <br />
            <NavLink>Ear Piercing</NavLink>
          </div>
          <div className="col-lg-2">
            <h6 className="text-dark">CaratLane Advantage</h6>
            <NavLink>15-DAY RET</NavLink>
            <br />
            <NavLink>FREE SHIPPING</NavLink>
            <br />
            <NavLink>POSTCARDS</NavLink>
            <br />
            <NavLink>Old Gold Exchange</NavLink>
          </div>
          <div className="col-lg-2">
            <h6 className="text-dark">Customer Service</h6>
            <NavLink>RETURN POLICY</NavLink>
            <br />
            <NavLink>ORDER STATUS</NavLink>
            <br />
          </div>
          <div className="col-lg-2">
            <h6 className="text-dark">About Us</h6>
            <NavLink>OUR STORY</NavLink>
            <br />
            <NavLink>PRESS</NavLink>
            <br />
            <NavLink>BLOG</NavLink>
            <br />
            <NavLink>CAREERS</NavLink>
            <br />
          </div>
          <div className="col-lg-4">
            <h6 className="text-dark">Contact Us</h6>
            <p>CaratLane Trading Pvt Ltd</p>
            <p>
              No:727, 1st Floor, TIL Park Anna Salai, Pathari Road, Thousand
              Lights, Chennai, Tamil Nadu 600006.
            </p>
            <NavLink>24X7 Enquiry Support ( ALL Days )</NavLink>
            <br />
            <NavLink>
              General : <span>Contactus@Caratlane.Com</span>
            </NavLink>
            <br />
            <NavLink>
              Corporate :<span>B2B@Caratlane.Com</span>
            </NavLink>
            <br />
            <NavLink>
              HR :<span>Careers@Caratlane.Com</span>
            </NavLink>
            <br />
            <NavLink>
              Grievance :<span>Click Here</span>
            </NavLink>
            <div className="Social_icons d-flex">
              <div>
                <NavLink>
                  <IoMdCall className="icon" />
                </NavLink>{" "}
                <br />
                call us
              </div>
              <div className="ps-4">
                <NavLink>
                  <IoMdChatboxes className="icon" />
                </NavLink>{" "}
                <br />
                Chat
              </div>
              <div className="ps-4">
                <NavLink>
                  <FaWhatsapp className="icon" />
                </NavLink>{" "}
                <br />
                Whatsapp
              </div>
              <div className="ps-4">
                <NavLink>
                  <MdEmail className="icon" />
                </NavLink>{" "}
                <br />
                Email
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-4">
            <p style={{ color: "#433d8b", fontStyle: "bold" }}>Find us on</p>
            <div className="icons">
              <NavLink className="ps-0">
                <AiFillInstagram />
              </NavLink>
              <NavLink>
                <FaFacebook />
              </NavLink>
              <NavLink>
                <FaLinkedin />
              </NavLink>
              <NavLink>
                <BsPinterest />
              </NavLink>
              <NavLink>
                <RiTwitterXFill />
              </NavLink>
            </div>
          </div>
        </div>       
      </div>
    </div>
  )
}

export default Footer
