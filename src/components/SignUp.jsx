import React, { useState } from "react";
import { auth, provider } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleButton from "react-google-button";
import Navbar from "./Navbar";
import Footer from "./Footer";  
const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("Your Account Has been created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="col-lg-6 signup_form">
        <form onSubmit={handlesubmit}>
          <div className="signupwithgoogle">
            <br />
          </div>
          <p className="continuewith">Continue with </p>

          <div>
            <input
              type="text"
              placeholder="Enter Email"
              className="input ms-lg-2"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Password"
              className="input ms-lg-2 mt-sm-2"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <br className="d-sm-none" />

          <div>
            <input type="text" placeholder="First Name" className="input mt-sm-2 ms-sm-2" />
            <input type="text" placeholder="Last Name" className="input ms-lg-2 mt-sm-2" />
          </div>
          <br />

          <div className="text-center checkbox ps-0">
            <input type="radio" value="Male" />&nbsp; 
            Male   &nbsp; &nbsp; 
            <input type="radio" value="Female" />&nbsp; 
             Female&nbsp; &nbsp; 
            <input type="radio" value="Other" />&nbsp; 
            Other&nbsp; &nbsp; 
          </div>

          <button onClick={handlesubmit} className="signupbtn mt-2">
            Sign Me Up
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
