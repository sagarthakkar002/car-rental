import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(false);
  };
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-6 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex flex-1 justify-end gap-3">
          <IoClose onClick={() => setShowMenu(false)} size={50} />
        </div>
        <nav className="mt-10">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data, index) => (
              <li key={index}>
                <a
                  href={`/car-rental${data.link}`}
                  onClick={handleClick}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="#">Sagar</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default MobileNav;
