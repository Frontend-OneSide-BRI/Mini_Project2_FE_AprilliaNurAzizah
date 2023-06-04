import React, { useState } from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <footer className=" text-white bg-black">
      <div className="flex justify-between items-center h-17 max-w-[1920px] mx-auto px-4">
        <h1
          className="w-full text-lg font-bold text-white cursor-pointer"
          onClick={() => handleLinkClick("/")}
        >
          &copy; 2023 Ozeum
        </h1>
        <ul className="hidden md:flex cursor-pointer">
          <li className="p-4  hover:text-gray-300">
            <BsFacebook size={22} />
          </li>
          <li className="p-4  hover:text-gray-300">
            <AiFillInstagram size={25} />
          </li>
          <li className="p-4  hover:text-gray-300">
            <AiFillGithub size={25} />
          </li>
          <li className="p-4  hover:text-gray-300">
            <AiFillTwitterCircle size={25} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
