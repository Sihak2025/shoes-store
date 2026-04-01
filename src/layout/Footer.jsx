import React from "react";
import { AiFillSound } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[90%] h-auto flex flex-col bg-black m-auto items-center">
      <div className="w-full h-auto flex items-start justify-between py-10 px-10">
        <div className="w-[360px] h-[300px] flex flex-col gap-7">
          <h1 className="text-3xl text-white font-semibold">THE AUTEUR</h1>
          <p className="text-gray-500 text-xl">
            A boutique cinema streaming experience for the discering cinephile
            Curated, editorialized and presented with passion
          </p>
          <div className="flex items-center gap-6 mt-3">
            <AiFillSound className="text-gray-500 text-2xl" />
            <FaEarthAmericas className="text-gray-500 text-2xl" />
            <MdOutlineVideoLibrary className="text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="w-[22%] h-[300px]">
          <ul className="flex flex-col gap-6">
            <li className="text-white text-lg tracking-[0.4em] font-semibold uppercase">
              GENRES
            </li>
            <li className="text-xl text-gray-500 ">ACTION</li>
            <li className="text-xl text-gray-500 ">DRAMA</li>
            <li className="text-xl text-gray-500 ">SCI-FI</li>
            <li className="text-xl text-gray-500 ">HORROR</li>
          </ul>
        </div>
        <div className="w-[22%] h-[300px]">
          <ul className="flex flex-col gap-6">
            <li className="text-white text-lg tracking-[0.4em] font-semibold uppercase">
              COMPANY
            </li>
            <li className="text-xl text-gray-500 ">ABOUT US</li>
            <li className="text-xl text-gray-500 ">CONTACT</li>
            <li className="text-xl text-gray-500 ">CAREERS</li>
            <li className="text-xl text-gray-500 ">EDITORIAL TEAM</li>
          </ul>
        </div>
        <div className="w-[22%] h-[300px]">
          <ul className="flex flex-col gap-6">
            <li className="text-white text-lg tracking-[0.4em] font-semibold uppercase">
              SUPPORT
            </li>
            <li className="text-xl text-gray-500 ">TEAMS OF SERVICES</li>
            <li className="text-xl text-gray-500 ">PRIVACY POLICY</li>
            <li className="text-xl text-gray-500 ">HELP CENTER</li>
            <li className="text-xl text-gray-500 ">ACCOUNT</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="w-full flex flex-col gap-5 items-center justify-center h-auto py-10 px-10">
        <div className="flex justify-center items-center gap-4">
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-blue-500">
            <IoLogoYoutube className="text-2xl"/>
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-blue-500">
            <FaFacebook className="text-2xl"/>
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-blue-500">
            <FaGoogle className="text-2xl"/>
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-blue-500">
            <FaTiktok className="text-2xl"/>
          </div>
        </div>
        <p className="text-gray-500 text-lg">
          © 2023 THE AUTEUR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};
export default Footer;
