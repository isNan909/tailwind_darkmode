import React from 'react';
import Toggle from '../components/toggle';
import logo from '../images/Tailwind.png';

const Navbar = () => {
  return (
    <header className="text-gray-700 bg-white dark:bg-black body-font ">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="flex">
          <a
            href="javascript.void(0)"
            className="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <img src={logo} alt="tailwind" className="w-9 h-9" />
          </a>
          <nav className="flex flex-wrap items-center justify-center ml-4 text-base">
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Dashboard
            </a>
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Projects
            </a>
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Setting
            </a>
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Account
            </a>
          </nav>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
