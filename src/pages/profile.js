import React from 'react'

const profile = () => {
    return (
        <>
            <div className="bg-light">
                <div className="container ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 mt-5 pt-5">
                            <div className="row z-depth-3">
                                <div className="col-sm-4 bg-info rounded-left">
                                    <div className="card-block text-center text-white">
                                        <i className='fas fa-user-tie fa-7x mt-5'></i>
                                        <h2 className='font-weight-bold mt-4'>Bandana Stpathy</h2>
                                        <p>Web Developer</p>
                                        <i className='far fa-edit fa-2x mb-4'></i>
                                    </div>
                                </div>

                                <div className='col-sm-8 bg-white rounded-right'>
                                    <h3 className='mt-3 text-center'>Information</h3>
                                    <hr className='badge-primary mt-0 w-100' />
                                    <div className='row'>
                                        <div className="col-sm-6">
                                            <p className="font-weight-bold">Email:</p>
                                            <h6 className='text-muted'>bandanasatpathy435@gmail.com</h6>
                                        </div>

                                        <div className="col-sm-6">
                                            <p className="font-weight-bold">Phone:</p>
                                            <h6 className='text-muted'>+9337817565</h6>
                                        </div>
                                    </div>
                                    <h4 className='mt-3 text-center '>Projects</h4>
                                    <hr className='bg-primary' />
                                    <div className='row'>

                                        <div className="col-sm-6">
                                            <p className="font-weight-bold">Recent:</p>
                                            <h6 className='text-muted'>weather App</h6>
                                        </div>

                                        <div className="col-sm-6">
                                            <p className="font-weight-bold">Most viwed:</p>
                                            <h6 className='text-muted'>food web</h6>
                                        </div>
                                    </div>

                                    <hr className='bg-primary' />
                                     <ul className='list-unstyled d-flex justify-content-center mt-4'>
                                     <li><a href="#"><i className='fab fa-facebook-f px-3 h4 text-info'></i></a></li>
                                     <li><a href="#"><i className='fab fa-instagram px-3 h4 text-info'></i></a></li>
                                     <li><a href="#"><i className='fab fa-twitter px-3 h4 text-info'></i></a></li>
                                     </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile
