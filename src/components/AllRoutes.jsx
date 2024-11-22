import React from 'react'
import { Routes,Route } from 'react-router'
import Homepage from './Homepage'
import Test from '../Test'
// import RingPages from './RingPages'
import Ring from './Ring'
import RingsDetails from './RingsDetails'
import AddRingProduct from './AddRingProduct'
import Login from './Login'
import PrivatePage from './PrivatePage'
import SignUp from './SignUp'
import Wishlist from './Wishlist'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/ringpage' element={
        // <PrivatePage>
          <Ring />
          // </PrivatePage>
            
          }></Route>
        <Route path='/productdetails/:id' element={<RingsDetails />}></Route>
        <Route path='/addringproduct' element={<AddRingProduct />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<p>Page not found</p>}></Route>
      </Routes>
    </div>            
  )
}

// export default AllRoutes
