import React from 'react';
// import BMW.jpg from './Photos';
// import { useState } from 'react';

export default function Home(prop) {
    return (
        // <div className="container-fluid min-vh-100 d-flex flex-column bg-dark text-light mt-1" data-bs-theme={prop.Mode}>

        <div className={`container-fluid min-vh-100 d-flex flex-column ${prop.Mode} text-${prop.text}`} >
            <div className="row w-100 justify-content-center m-3">
                <div className="col-12 ">
                    <h2 className="display-1 fw-bold"><u>MAHEBOOB PASHA</u></h2>
                </div>
            </div>
            <div className="row w-100 m-4 flex-grow-1 ">
                <div className="col-10 col-md-2 text-center  border border-3 border-white rounded " style={{height : '250px' }}>
                    <img src="./Photos/BMW.jpg" alt="Profile Photo" className="img-fluid shadow mt-4" style={{ maxWidth: '150px', maxHeight: '250px' }} />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    {/* <div className="container"> */}
                    {/* <form ClassName="row g-3"> */}
                        <div ClassName="row ">
                            <div ClassName="col">
                                <input type="text" ClassName="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div ClassName="col">
                                <input type="text" ClassName="form-control" placeholder="Last name" aria-label="Last name" />
                                <div ClassName="col-md-6" style={{position: 'Relational'}}>
                                    <label htmlFor="inputEmail4" ClassName="form-label">Email</label>
                                    <input type="email" ClassName="form-control" id="inputEmail4" disabled="disabled" />
                                    <div data-v-4914bf38=""></div></div>
                                <div ClassName="col-md-6">
                                    <label htmlFor="inputPassword4" ClassName="form-label">Phone</label>
                                    <input type="number" ClassName="form-control" id="inputPassword4" maxlength="10"
                                        disabled="disabled" />
                                </div>
                                <div ClassName="col-12">
                                    <label htmlFor="inputAddress" ClassName="form-label">Address</label>
                                    <input type="text" ClassName="form-control" id="inputAddress" placeholder="1234 Main St" disabled="disabled" />
                                </div>
                                <div ClassName="col-12">
                                    <label htmlFor="inputAddress2" ClassName="form-label">Address 2</label>
                                    <input type="text" ClassName="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" disabled="disabled" />
                                </div>
                                <div ClassName="col-md-6">
                                    <label htmlFor="inputCity" ClassName="form-label">City</label>
                                    <input type="text" ClassName="form-control" id="inputCity" disabled="disabled" />
                                </div>
                                <div ClassName="col-md-4">
                                    <label htmlFor="inputState" ClassName="form-label" disabled="disabled">State</label>
                                    <select id="inputState" ClassName="form-select" disabled="disabled">
                                        <option selected="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div ClassName="col-md-2">
                                    <label htmlFor="inputZip" ClassName="form-label" disabled="disabled">Zip</label>
                                    <input type="text" ClassName="form-control" id="inputZip " disabled="disabled" />
                                </div>
                                <div ClassName="col-12">
                                    <div ClassName="form-check">
                                        <input ClassName="form-check-input" type="checkbox" id="gridCheck" disabled="disabled" />
                                        <label ClassName="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div ClassName="col-12">
                                    <button type="submit" ClassName="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}




// Home.propType = {
//     Mode : propTypes.string
// }