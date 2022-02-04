import { React, useState } from "react";
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";


function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  //hitting api

  const signUpApi = async () => {
    setIsLoading(true);
    // console.log(signUpDetails);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup?isAdmin=false",
        signUpDetails
      );
      setIsLoading(false);
      toast.success("Account created successfully")
      // console.log("response is" , response)
      if (response.data.error) {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //  alert(response.data.error)
      } else {
        toast.success("Account created successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // alert("Account created successfully");
        console.log("response is", response);
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error.message);
    }
  };

  return (
    <>
      <Container>
                <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>WELCOME</h1>
                <Row className='mt-5'>
                    <Col lg={5} mg={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg'>
                        <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name='name' placeholder="Name" onChange={handleChange} />

                            </Form.Group>
                          
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" onChange={handleChange} />
                            </Form.Group>

                            <Button variant="btn btn-success w-100" type="submit" disabled={isLoading}
                                onClick={signUpApi} >
                                Sign Up
                                {isLoading && (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                )}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </>
  );
}
export default SignUp;
