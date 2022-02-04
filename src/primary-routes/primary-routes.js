import React from 'react'

import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from '../pages/Logout';
import Signup from "../pages/Signup";
import Wishlist from "../pages/wishlist";
import Orders from '../pages/order';
import Profile from '../pages/profile';
import AdminHome from '../pages/admin-home/admin-home';


const PrimaryRoutes = () => {
    return (
        <Routes>

            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/logout" element = {<Logout/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/wishlist" element = {<Wishlist/>}/>
            <Route path = "/orders" element = {<Orders/>}/>
            <Route path = "/admin/home" element = {<AdminHome/>}/>
            <Route path = "/profile" element = {<Profile/>}/>

        </Routes>
    )
}

export default PrimaryRoutes;
