import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {

    return (
        <nav className="flex justify-between items-center h-16 bg-purple-600 bg-opacity-100 m-1 rounded text-white relative shadow-sm font-mono" role='navigation'>
            <Link to='/' className="p-3 m-2 bg-black-500 rounded hover:bg-green-300 transition duration-300 ease-in-out"><h1>Coffee Club</h1></Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <div className="pr-8 md:block hidden">
                <Link className='p-2 m-2 bg-black-500 rounded hover:bg-red-300 transition duration-300 ease-in-out' to='/'>Home</Link>
                <Link className='p-2 m-2 bg-black-500 rounded hover:bg-red-300 transition duration-300 ease-in-out' to='/about'>About</Link>
                <Link className='p-2 m-2 bg-black-500 rounded hover:bg-red-300 transition duration-300 ease-in-out' to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
