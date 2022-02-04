import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../pages/context";



const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("userData: ", user);

  return (


    <div className="header">
    <div className="menu-bar">
     <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#34495e"}}>
       <div className="container-fluid">
         <Link style={{color:"white"}} className="navbar-brand" to="/">
          BANDANA
         </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-sm-5" style={{marginLeft:"auto"}}>
            {user?.auth && user?.userData?.role !== "ADMIN" && (
              <>
                <Link style={{color:"#ffffff"}} className="nav-link" to="/orders">
                 ORDERS
                </Link>
                <Link style={{color:"#ffffff"}} className="nav-link" to="/wishlist">
                 WISHLIST
                </Link>
                <Link style={{color:"#ffffff"}} className="nav-link" to="/profile">
                 PROFILE
                </Link>
              </>
            )}
            {!user?.auth && (
              <>
                <Link style={{color:"#ffffff"}} className="nav-link" to="/login">
                LOG IN
                </Link>
                <Link style={{color:"#ffffff"}} className="nav-link" to="/signup">
                  SIGN UP
                </Link>
              </>
            )}
            {user?.userData?.role === "ADMIN" && (
              <Link style={{color:"#ffffff"}} className="nav-link" to="/admin/home">
                ADMIN
              </Link>
            )}
            {user?.auth && (
              <a 
              style={{color:"#ffffff",cursor:"pointer"}}
                className="nav-link"
                onClick={() => {
                  setUser({
                    ...user,
                    ["auth"]: false,
                    ["userData"]: "",
                    ["token"]: null,
                  });
                  localStorage.clear();
                  navigate("/login");
                }}
              >
              LOG OUT
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
    </div>
    </div>
  );
};

export default Header;