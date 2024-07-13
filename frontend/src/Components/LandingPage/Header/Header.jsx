import React, { useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <header className="px-4 py-10 w-[100%] h-8 flex justify-between bg-[#1f1e24] items-center ">
      <img src={Logo} alt="Logo" className="w-16 h-16 " />
      <h4 className="font-extrabold text-[22px] text-white ml-4">
        AI<span className="text-blue-500">Media</span>
      </h4>
      <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out ml-auto"
          onClick={() => navigate("/authentication")}
        >
          SignUp
        </button>
      {/* {!user.details._id ? (
        <button
          className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
          onClick={() => navigate("/authentication")}
        >
          SignUp
        </button>
      ) : (
        <button
          className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
          onClick={() => navigate("/PostPage")}
        >
          {user.details.username}
        </button>
      )} */}
    </header>
  );
};

export default Header;
