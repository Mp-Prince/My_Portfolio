import React from 'react'

export default function NavBar(props) {
    return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            {/* <!-- Navbar content --> */}
            <div data-bs-theme="">
                <ul className="nav nav-tabs mt-3"  >
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Achviments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Social</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
