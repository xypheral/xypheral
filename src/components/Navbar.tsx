import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 bg-opacity-10 p-4 mt-0 w-full fixed top-0 z-10">
            <ul className="flex justify-center space-x-8">
                <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 hover:text-red-300 transition duration-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;