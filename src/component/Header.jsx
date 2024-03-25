import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/create">Navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/create">Create Post </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/allpost">All Post</Link>
                                    </li>

                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header