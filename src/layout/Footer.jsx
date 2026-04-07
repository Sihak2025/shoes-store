import { AiFillSound } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook,FaTiktok } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="w-full bg-black mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-6 lg:px-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl text-white font-bold tracking-tighter italic uppercase">
            THE AUTEUR
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A boutique cinema streaming experience for the discerning cinephile.
            Curated, editorialized and presented with passion.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <AiFillSound className="text-gray-500 text-2xl hover:text-white transition-colors cursor-pointer" />
            <FaEarthAmericas className="text-gray-500 text-2xl hover:text-white transition-colors cursor-pointer" />
            <MdOutlineVideoLibrary className="text-gray-500 text-2xl hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-white text-sm tracking-[0.3em] font-bold uppercase mb-6">
            Genres
          </h2>
          <ul className="flex flex-col gap-4 text-gray-500 text-lg">
            <li className="hover:text-red-600 cursor-pointer transition-colors">
              Action
            </li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">
              Drama
            </li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">
              Sci-Fi
            </li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">
              Horror
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm tracking-[0.3em] font-bold uppercase mb-6">
            Company
          </h2>
          <ul className="flex flex-col gap-4 text-gray-500 text-lg">
            <li className="hover:text-white cursor-pointer transition-colors">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Editorial Team
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm tracking-[0.3em] font-bold uppercase mb-6">
            Support
          </h2>
          <ul className="flex flex-col gap-4 text-gray-500 text-lg">
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Help Center
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Account
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-800"></div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 py-10 px-6">
        <div className="flex justify-center items-center gap-5">
          {[
            { icon: <IoLogoYoutube />, color: "bg-red-600" },
            { icon: <FaFacebook />, color: "bg-blue-700" },
            { icon: <BsGoogle />, color: "bg-gray-800" },
            { icon: <FaTiktok />, color: "bg-gray-800" },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color} text-white text-xl cursor-pointer hover:scale-110 transition-transform shadow-lg`}>
              {item.icon}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm md:text-base text-center">
          © {new Date().getFullYear()} THE AUTEUR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
