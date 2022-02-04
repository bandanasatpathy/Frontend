import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const Logout = () => {
    return (
        <>
          <Container>
                <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>WELCOME</h1>
                <Row className='mt-5'>
                    <Col lg={5} mg={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email"  />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password"  />
                            </Form.Group>

                            <Button variant="btn btn-success w-100 " type="submit"   >
                                Log In
                                
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Logout
