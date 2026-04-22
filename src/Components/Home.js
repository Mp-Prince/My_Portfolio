import React from 'react';
// import BMW.jpg from './Photos';
import { useState } from 'react';

export default function Home(prop) {
    return (
        // <div className="container-fluid min-vh-100 d-flex flex-column bg-dark text-light mt-1" data-bs-theme={prop.Mode}>

        <div className={`container-fluid min-vh-100 d-flex flex-column ${prop.Mode} text-${prop.text}`} >
            <div className="row w-100 justify-content-center m-3">
                <div className="col-12 ">
                    <h1 className="display-1 fw-bold">MAHEBOOB PASHA</h1>
                </div>
            </div>
            <div className="row w-100 justify-content-center flex-grow-1 align-items-center">
                <div className="col-10 col-md-6 text-center mb-4 border border-3 border-white rounded">
                    <img src="./Photos/BMW.jpg" alt="Profile Photo" className="img-fluid rounded-circle shadow" style={{ maxWidth: '250px', maxHeight: '300px' }} />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <p className="lead">Welcome to my portfolio website. Here you can explore my projects and learn more about my skills in web development.</p>
                </div>
            </div>
        </div>
    )
}

// Home.propTypes = {
//     Mode : propTypes.string
// }