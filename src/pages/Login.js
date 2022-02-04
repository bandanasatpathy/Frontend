import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

import axios from "axios"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./context";

const Login = () => {


    const { setUser, user } = useContext(UserContext);
    const navigate = useNavigate(); // use to route bw diff components

    //   user initial state
    const [userDetails, setDetails] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    //   handle change
    const handleLoginChange = (e) => {
        const { name, value } = e.target; //object destructuring
        setDetails({ ...userDetails, [name]: value });
    };

    const loginApi = async () => {
       
        console.log("userDetails: ", userDetails);
        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:4000/api/signin",
                userDetails
            );
           
            setUser({
                ...user,
                ["auth"]: true,
                ["userData"]: response.data.data.user,
                ["token"]: response.data.data,
            });

            setIsLoading(false);
            toast.success("Login successfull!");
            console.log("response: ", response);
            localStorage.setItem("userData", JSON.stringify(response.data.data.user));
            //to save in localstorage we have to serialize it, means to stringfy it
            localStorage.setItem("token", JSON.stringify(response.data.data.token));
            if (response.data.data.user.role === "ADMIN") {
                navigate("/admin/home");
            }


            else {
                navigate("/");
            }
        } catch (error) {
            setIsLoading(false);
            console.log("error: ", error.response);
            alert(error.response.data.error);
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
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleLoginChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" onChange={handleLoginChange} />
                            </Form.Group>

                            <Button variant="btn btn-success w-100" type="submit" disabled={isLoading}
                                onClick={loginApi} >
                                Log In
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
    )
}

export default Login
