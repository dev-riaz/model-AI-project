import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="max-lg:collapse bg-white  shadow-sm rounded-md">
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
            </label>
            <div className="flex items-center justify-between gap-2">
                <img className="w-10" src="../../public/logo.png" alt="" />
                <h1 className="font-bold">Ai Hub</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-between items-center gap-12 font-bold">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Services</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn bg-red-500 text-white rounded-full">Get In Touch</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
