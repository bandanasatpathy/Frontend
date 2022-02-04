import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import Footer from "./shared/Footer"
import React from 'react';
import { useState, useEffect } from "react";
import PrimaryRoutes from './primary-routes/primary-routes';
import { UserContext } from './pages/context'
import {BrowserRouter} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


function App() {

  const [user, setUser] = useState({ userData: "", auth: false, token: null });

  useEffect(() => {
    console.log("user: ", user);
  }, [user]);

  useEffect(() => {
    if (user?.auth) {
      setUser({
        ...user,
        ["auth"]: true,
        ["userData"]: JSON.parse(localStorage.getItem("userData")),
        ["token"]: JSON.parse(localStorage.getItem("token")),
      });
    } else if (localStorage.getItem("userData")) {
      setUser({
        ...user,
        ["auth"]: true,
        ["userData"]: JSON.parse(localStorage.getItem("userData")),
        ["token"]: JSON.parse(localStorage.getItem("token")),
      });
    }
  }, []);

  return (
    <>

<ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
    <Header/>
    <PrimaryRoutes/>
    <Footer/>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
