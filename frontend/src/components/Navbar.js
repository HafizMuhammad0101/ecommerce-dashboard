import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const auth = localStorage.getItem("user");

    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }

    return (
        <nav className='container-fluid navbarHeader pt-3'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-12 '>
                    <ul className='nav-items'>
                        {
                            auth &&
                            <Fragment>
                                <li className='mx-3 py-2'><Link to="/" className='nav-item text-white text-decoration-none'>Products</Link></li>
                                <li className='mx-3 py-2'><Link to="/add" className='nav-item text-white text-decoration-none'>Add Product</Link></li>
                                <li className='mx-3 py-2'><Link to="/delete" className='nav-item text-white text-decoration-none'>Delete Product</Link></li>
                                <li className='mx-3 py-2'><Link to="/update" className='nav-item text-white text-decoration-none'>Update Product</Link></li>
                                <li className='mx-3 py-2'><Link to="/profile" className='nav-item text-white text-decoration-none'>Profile</Link></li>
                                <li className='mx-3 py-2'><Link to="/signup" className='nav-item text-white text-decoration-none' onClick={logout}>Logout</Link></li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;