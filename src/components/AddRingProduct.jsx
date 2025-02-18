// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

// // react icon's file
// import { FaCcVisa } from "react-icons/fa";
// import { FaCcPaypal } from "react-icons/fa6";
// import { LuDelete } from "react-icons/lu";

// const AddRingProduct = () => {
//   const [adddata, setadddata] = useState([]);

//   useEffect(() => {
//     // Load initial data from API or localStorage
//     const PostData = () => {
//       axios
//         .get("http://localhost:30001/post/")
//         .then((res) => {
//           // Check if there's existing data in localStorage
//           const storedCart = JSON.parse(localStorage.getItem("cartData")) || [];
//           const dataWithQuantity = res.data.map((item) => ({
//             ...item,
//             quantity: 1, // Set default quantity
//           }));

//           // If localStorage has data, prioritize that
//           setadddata(storedCart.length > 0 ? storedCart : dataWithQuantity);
//         })
//         .catch((err) => console.log(err));
//     };
//     PostData();
//   }, []);

//   useEffect(() => {
//     // Update localStorage whenever cart data changes
//     localStorage.setItem("cartData", JSON.stringify(adddata));
//   }, [adddata]);

//   const formatPriceToNumber = (price) => {
//     return Number(price.replace(/,/g, ""));
//   };

//   const deleteCart = (id) => {
//     if (window.confirm("Are you sure you want to delete this item from the cart?")) {
//       const updatedData = adddata.filter((item) => item.id !== id);
//       setadddata(updatedData);
//     }
//   };

//   const increaseQuantity = (id) => {
//     const updatedData = adddata.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setadddata(updatedData);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedData = adddata.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setadddata(updatedData);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="d-flex cartpage mt-lg-5">
//         <div className="cart mt-lg-5">
//           {adddata.length === 0 ? (
//             <div>
//               <h3>There is Nothing here! </h3>
//               <p>Let's do some retail therapy.</p>
//               <button className="shoping_btn">Start Shopping</button>
//               <div className="d-flex justify-content-between cartpage_footer">
//                 <div>
//                   <h6 className="m-0">
//                     Contact Us: +91-44-66075200 (Helpline) |
//                     contactus@caratlane.com
//                   </h6>
//                 </div>
//                 <div className="d-flex">
//                   <NavLink>
//                     <FaCcVisa />
//                   </NavLink>
//                   <NavLink>
//                     <FaCcPaypal />
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             adddata.map((el) => (
//               <div key={el.id} className="d-flex empty_cart" style={{ width: "auto" }}>
//                 <div>
//                   <img
//                     src={el.image}
//                     height={200}
//                     width={200}
//                     className="img-fluid img-thumbnail mt-4 mb-4 ms-3 me-1"
//                     alt={el.title}
//                   />
//                 </div>
//                 <div className="ps-2 pt-4">
//                   <div className="d-flex justify-content-between">
//                     <p className="text-start">{el.price}</p>
//                     <NavLink onClick={() => deleteCart(el.id)} className="deletbtn">
//                       <LuDelete />
//                     </NavLink>
//                   </div>
//                   <p>{el.prevprice}</p>
//                   <p>{el.title}</p>
//                   <p>Size: {el.size}</p>
//                   <p>{el.description}</p>
//                   <div className="d-flex align-items-center">
//                     <button onClick={() => decreaseQuantity(el.id)}>-</button>
//                     <span className="mx-2">{el.quantity}</span>
//                     <button onClick={() => increaseQuantity(el.id)}>+</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="cartDetails d-none d-lg-block mt-5 pt-5">
//           <p>Cart Details</p>
//           {adddata.map((item) => (
//             <div key={item.id}>
//               {item.title}: {item.price} x {item.quantity} ={" "}
//               {(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}
//               <br />
//             </div>
//           ))}
//           <br />
//           <strong>Total:</strong>{" "}
//           {adddata
//             .map((item) => formatPriceToNumber(item.price) * item.quantity)
//             .reduce((total, value) => total + value, 0)
//             .toLocaleString()}
//         </div>
//       </div>

//       <div className="cartDetails d-block">
//         <p>Cart Details</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {adddata.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.title}</td>
//                 <td>{item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                   {(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <div>
//           <strong>Total:</strong>{" "}
//           {adddata
//             .map((item) => formatPriceToNumber(item.price) * item.quantity)
//             .reduce((total, value) => total + value, 0)
//             .toLocaleString()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddRingProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { Link, NavLink, useParams } from "react-router-dom";

// react icon's file
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";

const AddRingProduct = () => {
  const [adddata, setadddata] = useState([]);

  // const PostData = () => {
  //   axios
  //     .get("http://localhost:30001/post/")
  //     .then((res) => {
  //       const storedCart = JSON.parse(localStorage.getItem("cartData"));
  //       console.log(storedCart)
  //       const dataWithQuantity = res.data.map(item => ({
  //         ...item,
  //         quantity: 1, // Set initial quantity to 1
  //       }));

  //       setadddata(res.data);
  //       setadddata(dataWithQuantity);
  //       console.log(dataWithQuantity);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const PostData = () => {
    const storedCart = JSON.parse(localStorage.getItem('cartData'))
    if(storedCart && storedCart.length> 0)
    {
           setadddata(storedCart)
    }
    else{
      axios.get("http://localhost:30001/post/")
      .then((res)=>{
        const dataWithQuantity=res.data.map(item=>({
          ...item,
          quantity:1,
        }));
        setadddata(dataWithQuantity)
        // Save to LOcl Storage
        localStorage.setItem("cartData",JSON.stringify(dataWithQuantity))
  
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  };

  useEffect(() => PostData(), []);


  const formatPriceToNumber = (price) => {
    return Number(price.replace(/,/g, ""))
  }

  const deleteCart = (id) => {
    // alert("would you delet this cart")
    // axios.delete(`http://localhost:30001/post/${id}`)
    //   .then((res) => {
    //     console.log(res)
    //     PostData()

    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    if (window.confirm("Are you sure you want to delete this item from the cart?")) {
      const updateData = adddata.filter((item) => item.id !== id);
      setadddata(updateData)

      // updateData LocalStorage
      localStorage.setItem("cartData", JSON.stringify(updateData));

    }
  }
  const increaseQuantity = (id) => {
    // setadddata(adddata.map(item =>
    //   item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    // ));

  const updateData=adddata.map(item=>
    item.id===id?{...item,quantity:item.quantity+1}:item
  )
setadddata(updateData)
localStorage.setItem("cartData",JSON.stringify(updateData))
  };

  const decreaseQuantity = (id) => {
    // setadddata(adddata.map(item =>
    //   item.id === id && item.quantity > 1
    //     ? { ...item, quantity: item.quantity - 1 }
    //     : item
    // ));

    const updateData=adddata.map(item=>
      item.id===id && item.quantity>1?{...item,quantity:item.quantity-1}:item
    )
    setadddata(updateData)
    localStorage.setItem("cartData",JSON.stringify(updateData))    
  };

  return (
    <div>
      <Navbar />

      <div className="d-lg-flex cartpage mt-lg-5 col-12">
        <div className="cart mt-lg-5 col-12 col-lg-8">
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
              <div key={el.id} className="d-flex empty_cart" style={{ width: "auto" }}>
                <div>
                  <img src={el.image} height={200} width={200} className="img-fluid img-thumbnail mt-4 mb-4 ms-3 me-1" />
                </div>
                <div className="ps-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <p className="text-start">{el.price} </p>
                    <NavLink onClick={() => deleteCart(el.id)} className={"deletbtn"} >
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
                </div>
              </div>
            ))
          )}
        {/* </div> */}

        {/* <div className="cartDetails d-none d-lg-block mt-5 pt-5">
          <p>Cart Details</p>

          add price with quantity
          {adddata.map((item, index) => (
            <div key={item.id}>
              {item.title}: {item.price} x {item.quantity}    =   {(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}
              <br />
            </div>
          ))}

          <br />

          Calculate the total price considering the quantity
          {adddata
            .map((item) => formatPriceToNumber(item.price) * item.quantity)
            .reduce((total, value) => total + value, 0)
            .toLocaleString()}
          {adddata.map((item)=> formatPriceToNumber(item.price)).reduce((total,value)=> total + value,0).toLocaleString()}
        </div> */}
      </div>

      {/* <div className="cartDetails d-block"> */}
        {/* <p>Cart Details</p> */}
        {/* add price with quantity */}
        {/* {adddata.map((item, index) => (
          <div key={item.id}>
            {item.title}: {item.price} x {item.quantity}    =   {(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}
            <br />
          </div>
        ))} */}

       <div className="cartDetails d-block">
        <p>Cart Details</p>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {adddata.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{(formatPriceToNumber(item.price) * item.quantity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        {/* Calculate the total price considering the quantity  */}
        <div>
          <strong>Total:</strong> {adddata.map((item) => formatPriceToNumber(item.price) * item.quantity).reduce((total, value) => total + value, 0).toLocaleString()}
        </div>
      </div>
        <br />

      </div>

      <br />
      <br />
    </div>
  );
};

export default AddRingProduct;
