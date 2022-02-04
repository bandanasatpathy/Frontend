import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
      <MDBFooter className="font-small pt-4 mt-4 bg-black">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          
          <MDBCol md="12">
            
            <ul>
              <li className="list-unstyled">
                <Link style={{textDecoration:"none",color:"red"}}  className="nav-link" to="/orders">
                  ORDERS
                </Link>
              </li>
              <li  className="list-unstyled">
                <Link style={{textDecoration:"none",color:"red"}} className="nav-link" to="/wishlist">
                  WISHLIST
                </Link>
              </li>
              <li className="list-unstyled">
                <Link style={{textDecoration:"none",color:"red"}} className="nav-link" to="/signup">
                  SIGNUP
                </Link>
              </li>

              <li className="list-unstyled">
                <Link style={{textDecoration:"none",color:"red"}} className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
             
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"none",color:"skyblue"}} href="https://www.mdbootstrap.com"> @bandana.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </>
    )
}

export default Footer
