import React from 'react';
import { Menu } from '@headlessui/react';
import logo from '../../images/logo.png';

const Navbar = (): JSX.Element => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <img className="w-7/12" src={logo}></img>
            </div>
            <div className="flex flex-col">
                <Menu>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-lg lg:flex-grow">
                            <a
                                href="/Home"
                                className="block mt-4 lg:inline-block lg:mt-0 text-4x1 text-teal-200 hover:text-white mr-4"
                            >
                                Home
                            </a>
                            <a
                                href="/Shop"
                                className="block mt-4 lg:inline-block lg:mt-0 text-4x1 text-teal-200 hover:text-white mr-4"
                            >
                                Shop
                            </a>
                            <a
                                href="/Contact"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                            >
                                Contact
                            </a>
                            <a
                                href="/Checkout"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </Menu>
            </div>
        </nav>
    );
};

export default Navbar;
