import { Link, NavLink, useNavigate } from "react-router-dom";
import search_icon from "../assets/search_icon.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import menu_icon from "../assets/menu_icon.png";
import cross_icon from "../assets/cross_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b">
      <Link to="/">
        <h1 className="sm:text-3xl text-2xl">
          Shops<span className="text-[#f21c1c]">Verse</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-black">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <NavLink to="/exploreproducts" className="flex flex-col items-center gap-1">
          <p>EXPLORE PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <NavLink to="/aboutus" className="flex flex-col items-center gap-1">
          <p>KNOW US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Link to="/login">
          <img src={profile_icon} alt="profile-icon" className="sm:w-5 sm:block hidden cursor-pointer" />
        </Link>
        <div className="group relative">
          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="cart-icon" className="w-4 sm:w-5" />
            <p className="absolute sm:right-[-5px] right-[-6px] sm:bottom-[-5px] bottom-[-7px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">0</p>
          </Link>
        </div>
        <img 
          // onClick={() => navigate("/exploreproducts")} 
          src={search_icon} 
          alt="search-icon" 
          className="sm:w-5 cursor-pointer sm:block hidden" 
        />
        <img 
          src={menu_icon} 
          alt="menu-icon" 
          className="sm:w-5 w-3 cursor-pointer sm:hidden" 
          onClick={() => setMenuVisible(true)} 
        />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out ${menuVisible ? 'w-full' : 'w-0'} sm:hidden`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setMenuVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={cross_icon} alt="close-icon" className="h-4 rotate-180" />
            <p>Close</p>
          </div>
          <NavLink className="py-2 pl-6 border" to="/" onClick={() => setMenuVisible(false)}>HOME</NavLink>
          <NavLink className="py-2 pl-6 border" to="/exploreproducts" onClick={() => setMenuVisible(false)}>EXPLORE PRODUCTS</NavLink>
          <NavLink className="py-2 pl-6 border" to="/aboutus" onClick={() => setMenuVisible(false)}>KNOW US</NavLink>
          <NavLink className="py-2 pl-6 border-b" to="/contact" onClick={() => setMenuVisible(false)}>CONTACT US</NavLink>
          <NavLink className="py-2 pl-6 border-b" to="/login" onClick={() => setMenuVisible(false)}>LOGIN/SIGN UP</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



