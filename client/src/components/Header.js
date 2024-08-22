import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { TbMichelinBibGourmand } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../services/authApi';

function Header() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : ''

    const handleLoginClick = () =>{
        navigate('/login')
    }
    const handleRegisterClick = () =>{
        navigate('/signup')
    }
    const handleLogoutClick = async ()=>{
        try {
            await handleLogout()
            localStorage.removeItem('token'); 
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }
  return (
    <div className="2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <TbMichelinBibGourmand className="text-4xl"/>
                        <h2 className="font-normal text-2xl leading-6 text-gray-800">Tech Bloggie</h2>
                    </div>
    
                    <ul className="md:flex flex-auto space-x-2">
                        <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                            <Link to='/' className="block w-full h-full">All Blogs</Link>
                        </li>
                        {/* <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                            <Link to={`/blogs/user/${userId.id}`} className="block w-full h-full">My Blogs</Link>
                        </li> */}
                        {userId && userId.id && (
                            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                                <Link to='/blogs/create' className="block w-full h-full">Create Blog</Link>
                            </li>
                        )}
                    </ul>

                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            {!userId && <span onClick={handleLoginClick}>Login</span>}
                        </div>
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            {!userId && <span onClick={handleRegisterClick}>Register</span>}
                        </div>
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            {userId && <span onClick={handleLogoutClick}>Logout</span>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default Header