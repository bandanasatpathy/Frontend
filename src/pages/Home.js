import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context";
import Slider from '../pages/Slider'
import Cards from "../pages/Crds"
import CommonCard from './commonCards'

const Home = () => {

  const [productsHomeData, setProductsHomeData] = useState([]);
 

  useEffect(() => {
    //userData.setdata1("");
    getProductsApi();
  }, []);

  //get
  const getProductsApi = async () => {
    // console.log("token: ", token);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/user/get/products"
      );
      console.log("response: ", response);
      setProductsHomeData(response.data.data);
    } catch (error) {
      console.log("error: ", error);
      // alert(error.response.data.error);
    }
  };

    return (
        <>
          <Slider/>
          <Cards/>
         
          <div className="container-fluid" style={{backgroundColor:"#BFD0CA"}}>
           <div className="col-mt-4 ">
           <div className="row d-flex justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 ">
          {productsHomeData && productsHomeData.length !== 0
            ? productsHomeData.map((item) => {
                return <CommonCard key={item._id} productsHomeData1={item} />;
              })
            : "No data"}
        </div>
      </div>
      </div>
        </>
    )
}

export default Home
