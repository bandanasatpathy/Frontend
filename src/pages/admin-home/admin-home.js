import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProductModal from "../admin-home/add-product-modal";

const AdminHome = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProductsApi();
  }, []);

  //get
  const getProductsApi = async () => {
     const token = JSON.parse(localStorage.getItem("token"));
     console.log("token: ", token);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/get/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
       console.log("response: ", response);
      setProductsData(response.data.data);
    } catch (error) {
      console.log("error: ", error.response);
      alert(error.response.data.error);
    }
  };

  //add
  const addProductApi = async (product, closeModal) => {
    console.log('product: ', product);
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token: ", token);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/add/product",
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      closeModal();
      console.log("addresponse: ", response);
      getProductsApi();
    } catch (error) {
      console.log("error: ", error.response);
      alert(error.response.data.error);
    }
  };

  return (
    <div className="container">
      <h1> Products</h1>
      <div>
        <AddProductModal addProductApi={addProductApi} />
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsData && productsData?.length !== 0
            ? productsData?.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.productName}</td>
                    <td>{item?.description}</td>
                    <td>{item?.price}</td>
                    <td>
                      <button className="btn btn-success">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })
            : "No data"}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;