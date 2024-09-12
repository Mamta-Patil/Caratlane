import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Ring = () => {
 

  const [productdata, setproductdata] = useState([]);
  const [page,setpage]=useState(1)
  const getfetchdata = () => {
    axios
      .get("http://localhost:3000/products", {
        params:{
          _page:page,
           _limit:5,
        }
      })
      .then((res) => {
        setproductdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getfetchdata();
  }, [page]);


  return (
    <div>
      <Navbar />

      <div className="d-flex row m-0">
        <div className="d-flex rings_product" style={{ marginTop: "9%" }}>
          <div className="filters col-lg-3">
            <h6>price</h6>
            <div>
              <input type="checkbox" className="ms-5" onCheck />
              <span className="ps-5">₹10,001 - ₹15,000 </span>
              <br />
              <input type="checkbox" className="ms-5" />
              <span className="ps-5">₹20,001 - ₹30,000 </span>
              <br />
              <input type="checkbox" className="ms-5" />
              <span className="ps-5">₹5,001 - ₹10,000</span> <br />
              <input type="checkbox" className="ms-5" />
              <span className="ps-5">₹15,001 - ₹20,000 </span>
            </div>
          </div>

          <div className="products">
            {productdata.map((el) => (
              <div key={el.id} className="ring">
                <Link to={`/productdetails/${el.id}`}>
                  <img
                    src={el.image}
                    height={300}
                    width={"100%"}
                    className="image img-thumbnail"
                  />
                </Link>
                <p className="fs-6 m-0 ps-2 pt-2" style={{ color: "#433d8b" }}>
                  {el.price}{" "}
                </p>
                <p className="m-0 ps-2" style={{ color: "#de57e5" }}>
                  Check Delivery Date
                </p>
                <p className="m-0 ps-2" style={{ color: "grey" }}>
                  {el.title}{" "}
                </p>
              </div>
            ))}
<br/>
            <button className="" onClick={()=>setpage(page-1)}>Prev Page</button>
            <button className=""  onClick={()=>setpage(page+1)}>Next Page</button>
 
          </div>
         

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ring;
