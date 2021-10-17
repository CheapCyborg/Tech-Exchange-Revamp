import React from 'react';
import { Menu } from '@headlessui/react';

const Footer = (): JSX.Element => {
    return (
        <Menu>
            <div className="h-10 bg-blue-300 fixed inset-x-0 bottom-0 p-10">
                <div className="text-md md:flex-grow">
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
                        className="block mt-4 lg:inline-block lg:mt-0 text-4x1 text-teal-200 hover:text-white mr-4"
                    >
                        Contact
                    </a>
                    <a className="pb-10 flex items-center">ROANOKE PHONE: 540.904.4474</a>
                </div>
            </div>
        </Menu>
    );
};

export default Footer;
