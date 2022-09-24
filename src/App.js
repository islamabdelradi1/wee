import React from 'react'
import "./App.css"
import Fotter from './Fotter'
import Home from './Home'
import Navs from './Navs'
import Mobile from './Mobile'
import Homeg from './Homeg'
import Ba2a5g from './Ba2a5g'
import Vaiber from './Vaiber'
import Offers from './Offers'
import Services from './Services'
import Mobileplansar from './Mobileplansar'
import Dalel140 from './Dalel140'
import WETV from './WETV'
import Wepay from './Wepay'
import EPLTickets from './EPLTickets'
import ProductsListeService from './ProductsListeService'
import Login from './Login'
import Register from './Register'
import Plandetails from './Plandetails'
import Error from './Error'
import Addoffer from './Addoffer'

import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <Navs />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Mobile' element={<Mobile />}/>
        <Route path='/Homeg' element={<Homeg />}/>
        <Route path='/Ba2a5g' element={<Ba2a5g />}/>
        <Route path='/Vaiber' element={<Vaiber />}/>
        <Route path='/Offers' element={<Offers />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Mobileplansar' element={<Mobileplansar />}/>
        <Route path='/Dalel140' element={<Dalel140 />}/>
        <Route path='/WETV' element={<WETV />}/>
        <Route path='/Wepay' element={<Wepay />}/>
        <Route path='/EPLTickets' element={<EPLTickets />}/>
        <Route path='/ProductsListeService' element={<ProductsListeService />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Plandetails' element={<Plandetails />}/>
        <Route path='*' element={<Error />}/>
        <Route path='/Addoffer' element={<Addoffer />}/>

      </Routes>
    <Fotter />

    </BrowserRouter>
  )
}

export default App