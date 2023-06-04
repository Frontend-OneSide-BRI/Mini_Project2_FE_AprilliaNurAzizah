// rafce
import React, { useState } from "react";
import { Modal, Button, Input } from "flowbite-react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleModalToggle = () => {
    setIsShow(!isShow);
  };
  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return activeLink === path;
  };

  const handleButtonModal = () => {
    alert("Your massage has ben send, thank you.");
  };

  return (
    <nav>
      <div className="flex justify-between items-center h-20 max-w-[1920px] mx-auto px-4 text-white bg-black">
        <h1 className="w-full text-2xl font-bold text-white ms-3 cursor-pointer" onClick={() => handleLinkClick("/")}>Ozeum Gallery</h1>
        <ul className="hidden md:flex cursor-pointer">
          <a
            className={`p-4 whitespace-nowrap text hover:text-gray-300 ${
              isLinkActive("/") ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Homepage
          </a>
          <a
            className={`p-4 whitespace-nowrap text hover:text-gray-300 ${
              isLinkActive("/gallery") ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery Page
          </a>
          <a
            className="p-4 whitespace-nowrap text text-gray-400 hover:text-gray-300"
            onClick={handleModalToggle}
          >
            Contact
          </a>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed overflow-visible left-0 top-0 w-[60%] z-999 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-gray-400"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4">Ozeum</h1>
          <li
            className={` p-4 border-b border-gray-600 hover:text-gray-300 ${
              isLinkActive("/") ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Homepage
          </li>
          <li
            className={`p-4 border-b border-gray-600 hover:text-gray-300 ${
              isLinkActive("/") ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery Page
          </li>
          <li
            className="p-4 border-b border-gray-600 hover:text-gray-300"
            onClick={handleModalToggle}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="modal">
        <Modal show={isShow} onClose={() => setIsShow(false)}>
          <Modal.Header>Send your massage in here</Modal.Header>
          <Modal.Body>
            <div className="space-y-6"></div>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  for="massage"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Massage
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <button
                onClick={handleButtonModal}
                type="submit"
                class=" text-white bg-zinc-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
