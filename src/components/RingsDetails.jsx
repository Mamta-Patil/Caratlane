import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// react icons file
// import { FaCheckCircle } from "react-icons/fa";
// import { TbCoinRupeeFilled } from "react-icons/tb";

const RingsDetails = () => {
  const { id } = useParams();

  const [singledata, setsingledata] = useState({});

  const productdata = () => {
    axios
      .get(`http://localhost:30001/products/${id}`)
      .then((res) => {
        setsingledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    productdata();
  }, []);

  const AddToCart = () => {
    alert("add...");
    console.log(singledata);
    axios
      .post("http://localhost:30001/post", singledata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <NavLink to={"/"}>Homepage </NavLink>

      {/* Decription page */}
      <div className="row m-0 d-lg-none">
        <div>
          <div
            className="rings_details"
            // style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}
          >
            {singledata.images?.map((el, ind) => (
              <div key={ind}>
                <img src={el.image} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5>{singledata.price}</h5>
          <h6 style={{ color: "red" }}>{singledata.discount}</h6>
          <p style={{ fontSize: "12px" }}>(MRP Inclusive of all taxes)</p>
          <p> {singledata.title}</p>
          size :<p> {singledata.size}</p>
          weight : <p> {singledata.weight}</p>
          <div style={{ backgroundColor: "lightpink", padding: "10px 20px" ,width:"300px"}}>
            <h6 style={{ color: "red" }}>{singledata.discount}</h6>
            <p className="m-0">Offer Expires in 27391 days</p>
          </div>
   
          <button onClick={AddToCart} className="addToCartBtn mt-5">
            Add to Cart
          </button>
        </div>
      </div>

      {/* for dekstop mode */}
      <div className="d-none d-lg-block mt-5">
      <div className="row m-0 d-flex mt-5">
        <div className="col-lg-8 mt-5">
          <div
            className="row"
            // style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}
          >
            {singledata.images?.map((el, ind) => (
              <div key={ind} className="col-lg-6 p-0">
                <img src={el.image} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 mt-5">
          <h5>{singledata.price}</h5>
          <h6 style={{ color: "red" }}>{singledata.discount}</h6>
          <p style={{ fontSize: "12px" }}>(MRP Inclusive of all taxes)</p>
          <p> {singledata.title}</p>
          size :<p> {singledata.size}</p>
          weight : <p> {singledata.weight}</p>
          <div style={{ backgroundColor: "lightpink", padding: "10px 20px" ,width:"300px"}}>
            <h6 style={{ color: "red" }}>{singledata.discount}</h6>
            <p className="m-0">Offer Expires in 27391 days</p>
          </div>   
          <button onClick={AddToCart} className="addToCartBtn mt-5">
            Add to Cart
          </button>
        </div>
      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RingsDetails;
