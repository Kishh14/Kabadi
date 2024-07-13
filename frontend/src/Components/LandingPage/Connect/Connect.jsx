import React from "react";
import "./Connect.css";
import videofk from "../../../assets/videos.mp4";

const Connect = () => {
  return (
    <div className="relative my-8 h-screen w-screen">
        <div className="relative z-10 flex flex-col items-center pt-10 px-4 mb-4 md:mb-8">
        <p className="text-white text-xl sm:text-2xl md:text-3xl text-center">
          Connect Locally, Play Globally - Join the Kabaddi Community on Pick Local Rag!
        </p>
      </div>
      <video
        autoPlay
        loop
        muted
        className=" w-[80%] rounded-lg m-auto  h-full object-cover "
src={videofk}
      />
    
    </div>
  );
};

export default Connect;
