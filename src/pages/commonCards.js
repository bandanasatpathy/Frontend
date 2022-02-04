import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "./context";
import { FaHeart } from "react-icons/fa";


const CommonCard = ({ productsHomeData1 }) => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addToWishlist = async (_id) => {
    //console.log("auth: ", auth);
    if (!user.auth) {
      return navigate("/login");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/add/wishlist",
        {
          productId: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log("wishresponse: ", response);
    } catch (error) {
      console.log("error: ", error.response);
      alert(error.response.data.error);
    }
  };

  const placeOrder = async (_id) => {
    if (!user.auth) {
      return navigate("/login");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/place/order",
        {
          productId: _id,
          todaysDate: Date.now(),
          transactionId: uuidv4(), //823u482jdhjksqbdkbsd
          address: null,
          user: user.userData._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log("oderresponse: ", response);
    } catch (error) {
      console.log("error: ", error);
      alert(error.response.data.error);
    }
  };

  return (
        
        <div className=" card m-3 p-0  shadow " style={{ width: "21rem",backgroundColor:"pink" }}>
            <img style={{height:"20rem"}} src={productsHomeData1?.picture
              ? productsHomeData1?.picture
              : "https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755__340.jpg"
            } />
            <div className=" card-body text-center ">
              <div className="text">
                <h5 className="card-title"> {productsHomeData1.productName}</h5>
                <p className="card-text">
                 {productsHomeData1.description}
                </p>
                <p className="card-text">₹ {productsHomeData1.price}</p>
              </div>
              
            </div>
            <button onClick={() => {
                addToWishlist(productsHomeData1._id);
              }} className="btn btn-primary m-1" style={{ backgroundColor: "red", border: "none" }}><FaHeart /></button>
              <button onClick={() => {
                placeOrder(productsHomeData1._id);
              }} className="btn btn-primary m-1" style={{ backgroundColor: "teal" }}>SHOP NOW</button>
          </div>
        
       
  );
};

export default CommonCard;
