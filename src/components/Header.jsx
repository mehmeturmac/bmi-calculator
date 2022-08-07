import React from 'react';

function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 ">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">BMI</span>
            <img className="h-8 w-auto sm:h-10" src="https://cdn-icons-png.flaticon.com/512/3373/3373123.png" alt="" />
          </a>
        </div>
        <a href="/" className="text-base font-medium text-gray-800 hover:text-gray-100">
          Calculator
        </a>
        <a href="/whatisbmi" className="text-base font-medium text-gray-800 hover:text-gray-100">
          What is BMI?
        </a>
        <a href="/dietlist" className="text-base font-medium text-gray-800 hover:text-gray-100">
          Diet List
        </a>
      </div>
    </header>
  );
}

export default Header;
