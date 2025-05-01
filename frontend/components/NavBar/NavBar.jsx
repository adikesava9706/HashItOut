import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
  return (
    <div>
      <header className="text-gray-400  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Hash It Out</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/members" className="mr-5 hover:text-white">
              View Members
            </Link>
            <Link to="/add" className="mr-5 hover:text-white">
              Add Members
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
