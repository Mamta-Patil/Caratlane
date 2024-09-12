// import logo from './logo.svg';
// import './App.css';
import "./components/Homepage.css"
import "./components/Navbar.css"
import "./components/Media.css"
// import "./components/RingPage"

import Homepage from './components/Homepage';
import Navbar from "./components/Navbar";
// import RingPage from "./components/RingPage";
import {AllRoutes} from "./components/AllRoutes";




function App() {
  return (
    <div className="App"> 
    {/* <Homepage /> */}
    {/* <Navbar /> */}
    <AllRoutes />
    </div>
  );
}

export default App;
