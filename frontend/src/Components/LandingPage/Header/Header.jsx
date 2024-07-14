import React, { useContext, useEffect, useState } from "react";
import Logo1 from "../../../assets/logo1.jpg";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../../UserProfile/ProfileModal";
import { ContextStore } from "../../../ContextStore";
import { account } from "../../../../Appwrite";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    userName,
    setUserName,
<<<<<<< HEAD
=======
    userPhone,
    setUserPhone,
    daysAvailable,
    setDaysAvailable,
    timeAvailable,
    setTimeAvailable,
    userLocation,
    setUserLocation,
    fetchData,
    currentUserID,
    currentUserAccType,
>>>>>>> 7006d4103baab2902cdb503998582fe228539289
    setCurrentUserID,
  } = useContext(ContextStore);

  useEffect(() => {
    const getData = account.get();
    getData.then(
      (response) => {
        console.log(response);
        setUserName(response.name);
        setCurrentUserID(response.$id);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <section className="relative">
<<<<<<< HEAD
      <header className="px-6 py-4 md:px-12 md:py-3 flex flex-wrap items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg">
        <div className="flex items-center">
          <img src={Logo1} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md" />
          <h4 className="font-extrabold text-lg md:text-2xl text-white ml-3 md:ml-4">
            Scrap<span className="text-purple-500">It</span>
          </h4>
        </div>

        <div className="ml-auto flex space-x-4 mt-4 md:mt-0">
          {!userName ? (
            <>
              <button
                className="text-gray-200 hover:text-white hover:bg-purple-500 transition-colors duration-300 rounded-full px-5 py-2 shadow-lg"
                onClick={() => navigate("/register-as-a-user")}
              >
                Register as a User
              </button>
              <button
                className="text-gray-200 hover:text-white hover:bg-green-500 transition-colors duration-300 rounded-full px-5 py-2 shadow-lg"
                onClick={() => navigate("/register-as-a-rag-picker")}
              >
                Register as a RagPicker
              </button>
            </>
          ) : (
            <>
              <button
                className="text-white hover:text-gray-300 transition-colors duration-300 rounded-full px-5 py-2 shadow-lg"
                onClick={() => setShow(!show)}
              >
                Dashboard
              </button>
              <button
                className="text-white bg-sky-500 hover:bg-sky-600 transition-colors duration-300 rounded-full px-5 py-2 shadow-lg"
                onClick={() => setShow(!show)}
              >
                {userName}
              </button>
            </>
          )}
        </div>
=======
      <header className="px-12 py-10 overflow-hidden w-screen h-8 flex bg-[#1f1e24] items-center ">
        <button className="" onClick={() => navigate("/")}>
          <h4 className="font-extrabold text-[22px] text-white ml-4">
            Scrap<span className="text-orange-500">It</span>
          </h4>
        </button>

        {!userName ? (
          <>
            <button
              className="text-gray-200 hover:shadow-lg hover:text-white rounded btn ml-auto"
              onClick={() => navigate("/register-as-a-user")}
            >
              Register as a User
            </button>
            <button
              className="text-gray-200 hover:shadow-lg hover:text-white rounded btn ml-auto"
              onClick={() => navigate("/register-as-a-rag-picker")}
            >
              Register as a RagPicker
            </button>
          </>
        ) : (
          <>
            {currentUserAccType === "RagPicker" ? (
              <button
                className="text-white hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
                onClick={() => navigate("/ragPickerCentral")}
              >
                Dashboard
              </button>
            ) : (
              <button
                className="text-white hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
                onClick={() => navigate("/userCentral")}
              >
                User Dash
              </button>
            )}
            <button
              className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
              onClick={() => setShow(!show)}
            >
              {userName}
            </button>
          </>
        )}
>>>>>>> 7006d4103baab2902cdb503998582fe228539289
      </header>

      {show && currentUserAccType === "RagPicker" && <ProfileModal />}
    </section>
  );
};

export default Header;
