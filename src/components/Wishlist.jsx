import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Wishlist = () => {
  const [productdata, setproductdata] = useState([]);

  const WishListData = () => {
    axios.get("http://localhost:30001/wishlist")
      .then((res) => {
        console.log(res.data)
        setproductdata(res.data)
      }
      )
      .catch((err) => console.log(err))
  }

  const DeleteWishListProduct=(id)=>{
        axios.delete(`http://localhost:30001/wishlist/${id}`)
      .then((res) => {
        console.log(res)
        alert("Want you delete product from wishList product")
        WishListData()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
useEffect(()=>{
  WishListData()
},[])

  return (

    <div>
      <Navbar />
    <div className='products' >
      {productdata.map((el) => (
        <div key={el.id} className="ring">
          {/* <Link to={`/productdetails/${el.id}`}> */}
          <img
            src={el.image}
            height={300}
            width={"100%"}
            className="image img-thumbnail"
          />
          <button onClick={()=>DeleteWishListProduct(el.id)}>Delete</button>
          {/* </Link> */}
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
    </div>
    </div>

  )
}

export default Wishlist