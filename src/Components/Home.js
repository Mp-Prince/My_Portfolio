import React from 'react'
// import BMW.jpg from './Photos';
export default function Home() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column bg-dark text-light mt-1" data-bs-theme="dark">
            <div className="row w-100 justify-content-center mt-5">
                <div className="col-12 text-center">
                    <h1 className="display-1">MAHEBOOB PASHA</h1>
                </div>
            </div>
            <div className="row w-100 justify-content-center flex-grow-1 align-items-center">
                <div className="col-10 col-md-6 text-center mb-4 border border-3 border-white rounded">
                    <img src="./Photos/BMW.jpg" alt="Profile Photo" className="img-fluid rounded-circle shadow" style={{maxWidth: '250px',maxHeight:'300px'}} />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <p className="lead">Welcome to my portfolio website. Here you can explore my projects and learn more about my skills in web development.</p>
                </div>
            </div>
        </div>
    )
}
