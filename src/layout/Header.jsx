// import React, { useState } from "react";
// import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [active, setActive] = useState("home");
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.trim().length > 0) {
//       navigate(`/search?q=${value}`);
//     } else {
//       navigate("/"); 
//     }
//   };

//   return (
//     <header className="w-full bg-black text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         <div className="flex gap-10 lg:gap-20">
//           <Link to="/" onClick={() => setActive("home")}>
//             <h1 className="text-red-600 text-xl font-black tracking-tighter cursor-pointer uppercase italic">
//               THE AUTEUR
//             </h1>
//           </Link>
//           <nav className="hidden md:flex gap-6">
//             <ul className="flex items-center gap-8">
//               <Link to="/">
//                 <li onClick={() => setActive("home")} className={`cursor-pointer text-sm font-bold transition-all ${active === "home" ? "text-red-600 underline underline-offset-8" : "hover:text-red-600"}`}>
//                   MOVIE
//                 </li>
//               </Link>
//               <Link to="/tvshows">
//                 <li onClick={() => setActive("tvshows")} className={`cursor-pointer text-sm font-bold transition-all ${active === "tvshows" ? "text-red-600 underline underline-offset-8" : "hover:text-red-600"}`}>
//                   TV SHOW
//                 </li>
//               </Link>
//               <Link to="/actors">
//                 <li onClick={() => setActive("actors")} className={`cursor-pointer text-sm font-bold transition-all ${active === "actors" ? "text-red-600 underline underline-offset-8" : "hover:text-red-600"}`}>
//                   ACTORS
//                 </li>
//               </Link>
//               <Link to="/contact">
//                 <li className="cursor-pointer text-sm font-bold hover:text-red-600 transition-all" onClick={() => setActive("contact")}>
//                   Contact US
//                 </li>
//               </Link>
//             </ul>
//           </nav>
//         </div>
//         <div className="flex items-center gap-6">
//           <div className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 focus-within:border-red-600 transition-all duration-300">
//             <FaSearch className="text-gray-500 text-sm mr-2" />
//             <input
//               type="text"
//               placeholder="Search movies..."
//               value={query}
//               onChange={handleInputChange}
//               className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-32 sm:w-48 lg:w-64"
//             />
//           </div>
//           <FaBell className="hidden sm:block text-gray-400 cursor-pointer hover:text-white" />
//           <Link to="/profile">
//             <FaUserCircle className="text-2xl cursor-pointer hover:text-red-600 transition-colors" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;'
import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // Added Bars and Times
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length > 0) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/");
    }
  };

  // Shared navigation items
  const navItems = [
    { name: "MOVIE", path: "/", id: "home" },
    { name: "TV SHOW", path: "/tvshows", id: "tvshows" },
    { name: "ACTORS", path: "/actors", id: "actors" },
    { name: "Contact US", path: "/contact", id: "contact" },
  ];

  return (
    <header className="w-full bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-6 lg:gap-16">
          <Link to="/" onClick={() => setActive("home")}>
            <h1 className="text-red-600 text-lg md:text-xl font-black tracking-tighter cursor-pointer uppercase italic">
              THE AUTEUR
            </h1>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.id} to={item.path}>
                  <li 
                    onClick={() => setActive(item.id)} 
                    className={`cursor-pointer text-xs font-bold transition-all ${active === item.id ? "text-red-600 underline underline-offset-8" : "hover:text-red-600"}`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        {/* Search, Bell, Profile, and Hamburger */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Search bar is smaller on mobile */}
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-3 py-1.5 focus-within:border-red-600 transition-all duration-300">
            <FaSearch className="text-gray-500 text-xs mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              className="bg-transparent outline-none text-xs text-white placeholder-gray-500 w-20 sm:w-48 lg:w-64"
            />
          </div>

          <FaBell className="hidden sm:block text-gray-400 cursor-pointer hover:text-white" />
          
          <Link to="/profile">
            <FaUserCircle className="text-xl md:text-2xl cursor-pointer hover:text-red-600 transition-colors" />
          </Link>

          {/* Hamburger Icon for Small Devices */}
          <button 
            className="md:hidden text-white text-xl" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.path} 
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false); // Close menu on click
              }}
            >
              <span className={`text-2xl font-black italic tracking-widest ${active === item.id ? "text-red-600" : "text-white"}`}>
                {item.name}
              </span>
            </Link>
          ))}
          
          {/* Close button inside the menu */}
          <button 
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-2 border border-red-600 text-red-600 font-bold rounded-full hover:bg-red-600 hover:text-white transition-all"
          >
            CLOSE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;