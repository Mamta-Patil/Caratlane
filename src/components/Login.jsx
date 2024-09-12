import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import GoogleButton from 'react-google-button'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'


const Login = () => {

    const handlesubmit=(e)=>{
      e.preventDefault()
        signInWithPopup(auth,provider)
        .then((res)=>{
            console.log(auth,provider)
            alert("Your Are Login...🤩")
        })
        .catch((err)=>{
            alert("Your account is not creted so first create your account with caratlane")
            console.log(err)
        })
    }

  return (
    <div>

      {/* Navbar */}
       <Navbar />

     {/* <p className="text-center">Login page</p>  */}
     <div className="form">
     <form>
     <h6>Login to CaratLane</h6>
        <p>Login to unlock best prices and become an insider for our exclusive launches & offers. Complete your profile and get ₹250 worth of xCLusive Points.</p>
        <input type='text' placeholder='Enter Your Number Or Email' />
        <br />
        <br />
        <button className="btn1" onClick={handlesubmit} >Continue To Login</button>
        <br />
        <br />       
        <div className="google_btn">
          <GoogleButton onClick={handlesubmit} />
        </div>
         <br />
        <p>New to CaratLane? Create an Account</p>
     </form>

     </div>

     {/* Footet */}
     <Footer />
    </div>
  )
}

export default Login
