import React, { useContext, useEffect, useState } from "react";
import Logo1 from "../../../assets/logo1.jpg"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import ProfileModal from "../../UserProfile/ProfileModal";
import { ContextStore } from "../../../ContextStore";
import { account } from "../../../../Appwrite";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { userName, setUserName, currentUserAccType, setCurrentUserID } = useContext(ContextStore);

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
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
      <header className="px-12 py-10 overflow-hidden w-screen h-8 flex bg-[#1f1e24] items-center">
        <button className="flex items-center" onClick={() => navigate("/")}>
          <img src={Logo1} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md" />
          <h4 className="font-extrabold text-[22px] text-white ml-4">
            Scrap<span className="text-purple-500">It</span>
          </h4>
        </button>

        <div className="ml-auto flex space-x-4">
          {!userName ? (
            <>
              <button
                className="text-gray-200 hover:shadow-lg hover:text-white rounded btn"
                onClick={() => navigate("/register-as-a-user")}
              >
                Register as a User
              </button>
              <button
                className="text-gray-200 hover:shadow-lg hover:text-white rounded btn"
                onClick={() => navigate("/register-as-a-rag-picker")}
              >
                Register as a RagPicker
              </button>
            </>
          ) : (
            <>
              {currentUserAccType === "RagPicker" ? (
                <button
                  className="text-white hover:shadow-lg hover:border hover:border-white rounded-3xl btn"
                  onClick={() => navigate("/ragPickerCentral")}
                >
                  Dashboard
                </button>
              ) : (
                <button
                  className="text-white hover:shadow-lg hover:border hover:border-white rounded-3xl btn"
                  onClick={() => navigate("/userCentral")}
                >
                  User Dash
                </button>
              )}
              <button
                className="text-white bg-sky-500 hover:shadow-lg hover:border hover:border-white rounded-3xl btn"
                onClick={() => setShow(!show)}
              >
                {userName}
              </button>
            </>
          )}
        </div>
      </header>

      {show && currentUserAccType === "RagPicker" && <ProfileModal />}
    </section>
  );
};

export default Header;
