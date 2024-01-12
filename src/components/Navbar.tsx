import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="bg-gray-800 bg-opacity-10 p-4 mt-0 w-full fixed top-0 z-10">
            <ul className="flex justify-center space-x-8">
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/" ? "border-red-500" : ""}`}>
                    <Link href="/">Home</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/" ? "scale-x-100" : ""}`}></div>
                </li>
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/about" ? "border-red-500" : ""}`}>
                    <Link href="/about">About</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/about" ? "scale-x-100" : ""}`}></div>
                </li>
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/projects" ? "border-red-500" : ""}`}>
                    <Link href="/projects">Projects</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/projects" ? "scale-x-100" : ""}`}></div>
                </li>
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/contact" ? "border-red-500" : ""}`}>
                    <Link href="/contact">Contact</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/contact" ? "scale-x-100" : ""}`}></div>
                </li>
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/color" ? "border-red-500" : ""}`}>
                    <Link href="/color">Color</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/color" ? "scale-x-100" : ""}`}></div>
                </li>
                <li className={`relative text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300 mb-1 ${router.pathname === "/shabi" ? "border-red-500" : ""}`}>
                    <Link href="/shabi">傻逼</Link>
                    <div className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-transform duration-200 ease-out ${router.pathname === "/shabi" ? "scale-x-100" : ""}`}></div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;


// Version 1.1.0
// - - - - - - - HOME - ABOUT - PROJECTS - CONTACT - - - - - - -

// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 bg-opacity-10 p-4 mt-0 w-full fixed top-0 z-10">
//             <ul className="flex justify-center space-x-8">
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 hover:text-red-300 transition duration-300">
//                     <Link href="/">Home</Link>
//                 </li>
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300">
//                     <Link href="/about">About</Link>
//                 </li>
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300">
//                     <Link href="/projects">Projects</Link>
//                 </li>
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300">
//                     <Link href="/contact">Contact</Link>
//                 </li>
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300">
//                     <Link href="/color">Color</Link>
//                 </li>
//                 <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300">
//                     <Link href="/shabi">傻逼</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


// Version 1.0.0
// HOME - - - - - ABOUT - PROJECTS - CONTACT - - - - - - -

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 bg-opacity-10 p-4 mt-0 w-full fixed top-0 z-10">
//             <div className="grid grid-cols-3">
//                 <div>
//                     <ul className="flex justify-start ml-5">
//                         <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 hover:text-red-300 transition duration-300">
//                             <Link href="/">Home</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul className="flex justify-center space-x-8">
//                         <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300">
//                             <Link href="/about">About</Link>
//                         </li>
//                         <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-400 hover:text-red-300 transition duration-300">
//                             <Link href="/projects">Projects</Link>
//                         </li>
//                         <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500 hover:text-red-300 transition duration-300">
//                             <Link href="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div></div>
//             </div>
//         </nav>
//     );
// };