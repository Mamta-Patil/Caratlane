import axios from "axios";
import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar"
import { Link, NavLink, useParams } from "react-router-dom";

// react icon's file
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";

const AddRingProduct = () => {
  const [adddata, setadddata] = useState([]);
  const [quantity,setquantity] = useState(1)
  const PostData = () => {
    axios
      .get("https://caratlane-backend.onrender.com/post")
      .then((res) => {
                const storedCart = JSON.parse(localStorage.getItem("cartData"));
                console.log(storedCart)
        const dataWithQuantity = res.data.map(item => ({
          ...item,
          quantity: 1, // Set initial quantity to 1
        }));

        setadddata(res.data);
        setadddata(dataWithQuantity);
        console.log(dataWithQuantity);

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });

    // axios.get("http://localhost:3000/post")
    // .then((res)=>{
    //   console.log(res.data)
    //   setadddata(res.data)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  };

  useEffect(() => PostData(), []);
  

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };


const formatPriceToNumber=(price)=>{
  return Number(price.replace(/,/g,""))
}

  const deleteCart=(id)=>{
    alert("would you delet this cart")
    axios.delete(`http://localhost:3000/post/${id}`)
    .then((res)=>{
      console.log(res)
      PostData()
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const increaseQuantity = (id) => {
    setadddata(adddata.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setadddata(adddata.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  
  return (  
    <div>
      {/* <Navbar /> */}

      <div className="d-flex cartpage">
          <div className="cart">
            {adddata.length === 0 ? (
              <div>
                <h3>There is Nothing here! </h3>
                <p>Let's do some retail therapy.</p>
                <button className="shoping_btn">Start Shoping</button>
                <div className="d-flex justify-content-between  cartpage_footer">
                  <div>
                    <h6 className="m-0">
                      Contact Us: +91-44-66075200 (Helpline) |
                      contactus@caratlane.com
                    </h6>
                  </div>

                  <div className="d-flex">
                    <NavLink>
                      <FaCcVisa />
                    </NavLink>
                    <NavLink>
                      <FaCcPaypal />
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              adddata.map((el) => (
                <div key={el.id} className="d-flex empty_cart" style={{width:"auto"}}>
                <div>
                <img src={el.image} height={200} width={200} className="img-fluid img-thumbnail mt-4 mb-4 ms-3 me-1" />
                </div>
                <div className="ps-2 pt-4">

                <div className="d-flex justify-content-between">
                <p className="text-start">{el.price} </p>
                <NavLink onClick={()=>deleteCart(el.id)} className={"deletbtn"}>
                <LuDelete />  
                </NavLink>
                </div>
                  <p>{el.prevprice} </p>
                  <p>{el.title} </p>
                  <p>size : {el.size} </p>
                  <p>{el.description}</p> 
                  {/* Quantity Controls */}
                                   <div className="d-flex align-items-center">
                    <button onClick={() => decreaseQuantity(el.id)}>-</button>
                    <span className="mx-2">{el.quantity}</span>
                    <button onClick={() => increaseQuantity(el.id)}>+</button>
                  </div>


                  {/* {quantity.map((num,numindex)=>{
                    <p>
                    </p>
                  })} */}



                  {/* <button className="p-2" onClick={()=>setquantity(quantity-1)} disabled={quantity==0}>-</button> 
                  <button className="ms-4 p-2">{ quantity}</button>
                  <button className="ms-4 p-2" onClick={()=>setquantity(quantity+1)}>-</button> */}



                  {/* {console.log(adddata.length)} */}
                  {/* {console.log(quantity)} */}
                </div>
                </div>
                
              ))
            )}
          </div>

          <div className="cartDetails">
          <p>Cart Details</p>

{/* add price with quantity */}
          {adddata.map((item, index) => (
            <div key={item.id}>
              {item.title}: {item.price} x {item.quantity}    =   {(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}
              <br />
            </div>
          ))}



          {/* {adddata.map((item,index)=>{
          return  <div key={item.id}>
            {item.title}:
            {item.price}
            <br />
            </div>
          })} */}
          <br />
          





    {/* Calculate the total price considering the quantity */}
    {adddata
            .map((item) => formatPriceToNumber(item.price) * item.quantity)
            .reduce((total, value) => total + value, 0)
            .toLocaleString()}


           {/* {adddata.map((item)=> formatPriceToNumber(item.price)).reduce((total,value)=> total + value,0).toLocaleString()} */}




          </div>
      </div>

    


    </div>
  );
};

export default AddRingProduct;
