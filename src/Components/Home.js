import React from 'react';
// import BMW.jpg from './Photos';
// import { useState } from 'react';

export default function Home(prop) {
    return (
        // <div className="container-fluid min-vh-100 d-flex flex-column bg-dark text-light mt-1" data-bs-theme={prop.Mode}>

        <div className={`container-fluid min-vh-100 d-flex flex-column ${prop.Mode} text-${prop.text} px-4 `} >
            <div className="row w-100 justify-content-center m-3">
                <div className="col-12 ">
                    <h2 className="display-1 fw-bold">MAHEBOOB PASHA</h2>
                </div>
            </div>
            <div className="row w-100  flex-grow-1 mx-auto">
                <div className=" col-md-2 text-center ms-4" style={{ height: '250px' }}>
                    <img src="Photos/BMW.jpg" alt="Profile" className="img-fluid shadow my-4 border border-3 border-white rounded" style={{ maxWidth: '200px', maxHeight: '300px' }} />
                </div>
                <div className="col-md-9 d-flex justify-content-center my-3" >
                    {/* <div className="container"> */}
                    {/* <div className="row mx-5" style={{ display: 'none' }}>
                        <div className="col-md-4">
                            <label htmlFor="inputFName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id='inputFName' value='Maheboob' aria-label="First name" disabled />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputLName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id='inputLName' value='Pasha' aria-label="Last name" disabled />
                        </div>
                    </div> */}
                    <div className="row mx-2 px-2">
                        <div className="col-md-4" >
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" value='maheboobpasha7869@gmail.com' disabled />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword4" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="inputPassword4" value='6366156000' maxLength="10"
                                disabled />
                        </div>
                        <div className="col-8">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" disabled />
                        </div>
                        <div className="col-8">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" disabled />
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-md-4">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" value='Raichur' disabled />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label" disabled>State</label>
                                <input type="text" className="form-control" id="inputState" value='Karnataka' disabled/>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label" disabled>Pin</label>
                            <input type="text" className="form-control" id="inputZip" value='548170' disabled />
                        </div>
                        {/* <div className="col-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" disabled />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div> */}
                        {/* <div className="col-8">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}




// Home.propType = {
//     Mode : propTypes.string
// }