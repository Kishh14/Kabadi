import React from "react";
import "./Hero.css";
import L1 from "../../../assets/L1.png";
import heromain from "../../../assets/4d.jpg";
// import Start from "../../../assets/Start.png";
import { useNavigate } from "react-router-dom";
import heroImg from "../../../assets/hero-image.png";
import { useSelector } from "react-redux";

const Hero = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <div className="flex h-[80vh] main-div justify-between bg-image">
      <div className="left-div m-4 w-1/2 flex flex-col justify-center">
      
      <div className="mt-4 h-auto flex items-center">
  <p className="text-white text-2xl sm:text-3xl md:text-4xl">
    Dive into the World of <span className="text-[#6556cd]">Kabaddi</span> with Pick Local Rag
  </p>

          {/* <img
            src={Start}
            alt=""
            className="h-40 w-40 mt-5 para cursor-pointer"
            onClick={() => navigate("/authentication")}
          /> */}

          {/* {!user.details._id ? (
            <img
              src={Start}
              alt=""
              className="h-40 w-40 mt-5 para cursor-pointer"
              onClick={() => navigate("/authentication")}
            />
          ) : (
            <img
              src={Start}
              alt=""
              className="h-40 w-40 mt-5 para cursor-pointer"
              onClick={() => navigate("/PostPage")}
            />
          )} */}
        </div>
        <p className="text-gray-300 p-1 m-1 mt-5 w-3/4">
        Got it! Here’s a sentence for your Pick Local Rag website:
"Tired of the same old sports coverage? Discover a revolutionary platform dedicated to Kabaddi that brings you closer to the action and community like never before. Join Pick Local Rag today!"
        </p>
      </div>
      <div className="p-2 m-4 w-1/2 flex  justify-center">
        <img src={heromain} alt="" className=" rounded-lg" /> 
        {/* 3d model yaha hai na bhai */}
      </div>
    </div>
  );
};

export default Hero;
