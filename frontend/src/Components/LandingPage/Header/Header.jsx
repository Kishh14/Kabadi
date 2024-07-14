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
      </header>

      {show && <ProfileModal />}
    </section>
  );
};

export default Header;
