/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import React from 'react'

const Header = () => {
    return (
        <nav className="bg-[#ff742b] p-4 text-white">
            <div className=" container mx-auto flex justify-between">
                <Link to="/" className=" text-lg font-bold">Books reviews App</Link>
                <div>
                    <Link to="/" className="mr-4">Login</Link>
                    <Link to="/register" className="mr-4">Register</Link>
                    <Link to="/myreviews" className="mr-4">My Reviews</Link>
                    <Link to="/" className="mr-4">Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header