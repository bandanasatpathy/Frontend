import React from 'react'
import { FaHeart } from "react-icons/fa";


const Cards = () => {
    return (
        <>
            <div className="container-fluid mb-4" style={{backgroundColor:"pink"}} >
                <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    <div className="col mt-4" style={{ width: "23rem" }}>
                        <div className="card" style={{backgroundColor:"lightgray"}} >
                            <img src="https://images.pexels.com/photos/7516953/pexels-photo-7516953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="saree" />
                            <div className="card-body text-center">
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "red",border:"none" }}><FaHeart/></button>
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "teal" }}>SHOP NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className=" col mt-4" style={{ width: "23rem" }}>
                        <div className="card" style={{backgroundColor:"lightgray"}} >
                            <img src="https://images.pexels.com/photos/7346634/pexels-photo-7346634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="crop tops" />
                            <div className="card-body text-center" style={{ alignItems: "center" }}>
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "red",border:"none" }}><FaHeart/></button>
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "teal" }}>SHOP NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-4" style={{ width: "23rem" }}>
                        <div className="card" style={{backgroundColor:"lightgray"}} >
                            <img src="https://images.pexels.com/photos/9418789/pexels-photo-9418789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="denim" />
                            <div className="card-body text-center">
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "red",border:"none" }}><FaHeart/></button>
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "teal" }}>SHOP NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className=" col mt-4 " style={{ width: "23rem" }}>
                        <div className="card" style={{backgroundColor:"lightgray"}} >
                            <img src="https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="skirt" />
                            <div className="card-body text-center">
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "red",border:"none" }}><FaHeart/></button>
                            <button  className="btn btn-primary m-1" style={{ backgroundColor: "teal" }}>SHOP NOW</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards
