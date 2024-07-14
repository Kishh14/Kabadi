import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_success } from "../../Redux/userSlice";
import Header from "../LandingPage/Header/Header";
import { account, databases, ID } from "../../../Appwrite";
import { ContextStore } from "../../ContextStore";

const RagAuth = () => {
  const [login, setLogin] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [buttonActive, setButtonActive] = useState(true);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const {
    userName,
    phoneNumber,
    daysAvailable,
    userLocation,
    currentUserID,
    setCurrentUserID,
  } = useContext(ContextStore);
  let email = String(registerUser.email);
  let name = String(registerUser.username);

  useEffect(() => {
    fetchImage();
  }, []);

  // Getting the account details if user is logged in
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        console.log(response);
        setCurrentUserID(response.$id);
      },
      function (error) {
        console.error(error);
      }
    );
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setButtonActive(false);

    try {
      const promise = account.createEmailPasswordSession(
        loginUser.email,
        loginUser.password
      );

      promise.then(
        function (response) {
          toast.success("Logged In");
          navigate("/ragPickerCentral");
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
      setButtonActive(true);
      toast.error(error.response.data.message);
    } finally {
      setButtonActive(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setButtonActive(false);

    try {
      const Accpromise = account.create(
        ID.unique(),
        email,
        registerUser.password,
        name
      );
      Accpromise.then(
        function (response) {
          console.log("Acc created" + response);
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      toast.error(String(error));
      console.log(error);
    } finally {
      setButtonActive(true);
    }
  };

  const names = [
    "max",
    "maria",
    "louis",
    "david",
    "lisa",
    "hina",
    "adam",
    "thomas",
    "joseph",
    "robert",
    "john",
    "sona",
    "modi",
    "neet",
  ];
  let randomNumber = Math.floor(Math.random() * names.length);

  const fetchImage = async () => {
    setRegisterUser({
      ...registerUser,
      image: `https://api.multiavatar.com/${names[randomNumber]}.svg`,
    });
    const response = await axios.get(
      `https://api.multiavatar.com/${names[randomNumber]}.svg`
    );
    const svgData = response.data;
    const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`;
    setImage(svgDataUrl);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="flex flex-col md:flex-row bg-gray-800 shadow-xl rounded-lg w-full md:w-3/4 lg:w-2/3">
          <div className="md:w-1/2">
            {/* <img src={sideImg} alt="People" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" /> */}
            <img
              src="https://cdn.dribbble.com/users/1332227/screenshots/4833164/green-initiatives-plastic---1920x1080.gif"
              alt="People"
              className="w-full h-full object-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h5 className="text-center text-lg font-bold mb-4 text-gray-200">
              <span
                className={`cursor-pointer p-2 ${
                  login ? "text-gray-400" : "text-purple-400"
                }`}
                onClick={() => setLogin(false)}
              >
                SignUp
              </span>{" "}
              |{" "}
              <span
                className={`cursor-pointer p-2 ${
                  login ? "text-purple-400" : "text-gray-400"
                }`}
                onClick={() => setLogin(true)}
              >
                LogIn
              </span>
            </h5>
            {login ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-gray-200">Email:</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-gray-200"
                    required
                    value={loginUser.email}
                    onChange={(e) =>
                      setLoginUser({ ...loginUser, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-200">Password:</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-gray-200"
                    required
                    value={loginUser.password}
                    onChange={(e) =>
                      setLoginUser({ ...loginUser, password: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded mt-4"
                  disabled={!buttonActive}
                >
                  {buttonActive ? "Log In" : "Logging In..."}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-gray-200">Username:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-gray-200"
                    required
                    value={registerUser.username}
                    onChange={(e) =>
                      setRegisterUser({
                        ...registerUser,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-200">Email:</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-gray-200"
                    required
                    value={registerUser.email}
                    onChange={(e) =>
                      setRegisterUser({
                        ...registerUser,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-200">Password:</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-gray-200"
                    required
                    value={registerUser.password}
                    onChange={(e) =>
                      setRegisterUser({
                        ...registerUser,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded mt-4"
                  disabled={!buttonActive}
                >
                  {buttonActive ? "Sign Up" : "Signing Up..."}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RagAuth;
