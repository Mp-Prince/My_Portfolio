// import React, { useState } from 'react'

export default function NavBar(prop) {


    return (
        // <nav className={`navbar bg-${prop.Mode} border-bottom border-body`}>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary `} data-bs-theme={`${prop.Mode}`}>
            <div className={`container-fluid`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- Navbar content --> */}
                {/* <div data-bs-theme=""> */}
                <div className={`collapse navbar-collapse text-${prop.text}`} id="navbarNav">
                    <ul className="nav nav-tabs mt-2 navbar-nav"  >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Achviments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Social</a>
                        </li>
                    </ul>
                    {/* </div> */}
                    <div className={`d-flex form-check form-switch flex-row-reverse mx-3`} >
                        <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" onClick={prop.toggel} switch />
                        <label className={`form-check-label text-${prop.text}`} htmlFor="checkNativeSwitch">
                            {/* {prop.mode} */}
                            {prop.Mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
NavBar.defaultprop = {
    Mode: 'light',
    toggel: 'light',
    text : 'Dark'
}

// NavBar.propTypes = {
//     mode : propTypes.string,
//     toggel : propTypes.string
// }
