import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../Components/Home/HomePage'
import Navbar from '../Components/Navbar/Navbar'
import Cart from '../Components/Cart/Cart'
import Profile from '../Components/Profile/Profile'
import PaymentSuccess from '../Components/PaymentSuccess/PaymentSuccess'
import Search from '../Components/Search/Search'
import CreateRestaurantForm from '../AdminComponent/AddRestaurants/CreateRestaurantForm'
import NotFound from '../Components/NotFound/NotFound'
import PasswordChangeSuccess from '../Components/Auth/PasswordChangeSuccess'
import Restaurant from '../AdminComponent/Restaurant/Restaurant'

const CustomerRoutes = () => {
  return (
    <div className='relative'>
        <nav className="sticky top-0 z-50">
            <Navbar/>
        </nav>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/account/:register' element={<HomePage/>}/>
            <Route exact path='/restaurant/:city/:title/:id' element={<Restaurant/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/admin/add-restaurant' element={<CreateRestaurantForm/>}/>
            <Route exact path='/password_change_success' element={<PasswordChangeSuccess/>}/>
            <Route exact path='/*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default CustomerRoutes