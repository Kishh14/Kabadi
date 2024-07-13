import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileModal from "../../UserProfile/ProfileModal";
const Header = ({
  userName,
  setUserName,
  userPhone,
  setUserPhone,
  daysAvailable,
  setDaysAvailable,
  timeAvailable,
  setTimeAvailable,
  userLocation,
  setUserLocation,
}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <section className="relative">
      <header className="px-4 py-10 w-[100%] h-8 flex justify-between bg-[#1f1e24] items-center ">
        <img src={Logo} alt="Logo" className="w-16 h-16 " />
        <h4 className="font-extrabold text-[22px] text-white ml-4">
          AI<span className="text-blue-500">Media</span>
        </h4>

        {!user.details._id ? (
          <button
            className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
            onClick={() => navigate("/authentication")}
          >
            SignUp
          </button>
        ) : (
          <button
            className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
            onClick={() => setShow(!show)}
          >
            {user.details.username}
          </button>
        )}
      </header>
      {show && (
        <ProfileModal
          userName={userName}
          setUserName={setUserName}
          userPhone={userPhone}
          setUserPhone={setUserPhone}
          daysAvailable={daysAvailable}
          setDaysAvailable={setDaysAvailable}
          timeAvailable={timeAvailable}
          setTimeAvailable={setTimeAvailable}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
        />
      )}
    </section>
  );
};

export default Header;
