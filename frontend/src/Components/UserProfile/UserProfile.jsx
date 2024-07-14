import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { account, databases, ID } from "../../../Appwrite";
import { ContextStore } from "../../ContextStore";
import Header from "../LandingPage/Header/Header";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  // const time = ["08-12 AM", "12-04 AM", "04-08 AM"];

  const navigate = useNavigate();

  const {
    userName,
    setUserName,
    userPhone,
    setUserPhone,
    daysAvailable,
    setDaysAvailable,
    userLocation,
    userCity,
    setUserCity,
    userPincode,
    setUserPincode,
    setUserLocation,
    currentUserID,
  } = useContext(ContextStore);

  const phoneNumber = Number(userPhone);

  const handleForm = (e) => {
    e.preventDefault();
    let data = {
      userName,
      phoneNumber,
      daysAvailable,
      userLocation,
      userCity,
      userPincode,
      accountType: "User",
    };

    const promise = databases.createDocument(
      "669355b80023d49b2370",
      "669355fa000f8996c0ca",
      currentUserID,
      data
    );

    promise.then(
      function (response) {
        alert("Profile Created");
        navigate("/userCentral");
      },
      function (error) {
        // console.error(error);
        alert("Profile Already Created!");
      }
    );
  };

  return (
    <>
      <Header />
      <div className="w-2/3 h-screen my-10 mx-auto bg-gray-800 rounded shadow-lg">
        <div className="flex justify-between container mx-auto">
          <div className="w-full">
            <div className="mt-4 px-1">
              <form className="mx-5 my-3 mb-4" onSubmit={(e) => handleForm(e)}>
                <div className="flex items-center gap-3">
                  {/* Name */}
                  <label
                    className="relative block p-3 border-2 border-black rounded"
                    htmlFor="name"
                  >
                    <span
                      className="text-md font-semibold text-zinc-400"
                      htmlFor="name"
                    >
                      Name
                    </span>
                    <input
                      className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </label>

                  {/* Number */}
                  <label
                    className="relative block p-3 border-2 border-black rounded"
                    htmlFor="number"
                  >
                    <span
                      className="text-md font-semibold text-zinc-400"
                      htmlFor="number"
                    >
                      Number
                    </span>
                    <input
                      className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                      id="number"
                      type="number"
                      placeholder="Enter Your Number"
                      required
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </label>
                </div>

                {/* Location */}
                <label
                  className="relative block p-3 mt-3 border-2 border-black rounded"
                  htmlFor="location"
                >
                  <span
                    className="text-md font-semibold text-zinc-400"
                    htmlFor="location"
                  >
                    Your Address
                  </span>
                  <input
                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                    id="location"
                    type="text"
                    placeholder="Your pickup address"
                    required
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                  />
                </label>

                {/* City */}
                <label
                  className="relative block p-3 mt-3 border-2 border-black rounded"
                  htmlFor="city"
                >
                  <span
                    className="text-md font-semibold text-zinc-400"
                    htmlFor="city"
                  >
                    Your City
                  </span>
                  <input
                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                    id="city"
                    type="text"
                    placeholder="Your city"
                    required
                    value={userCity}
                    onChange={(e) => setUserCity(e.target.value)}
                  />
                </label>

                {/* Pincode */}
                <label
                  className="relative block p-3 mt-3 border-2 border-black rounded"
                  htmlFor="pincode"
                >
                  <span
                    className="text-md font-semibold text-zinc-400"
                    htmlFor="pincode"
                  >
                    Your Pincode
                  </span>
                  <input
                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                    id="pincode"
                    type="text"
                    placeholder="Your pincode"
                    required
                    value={userPincode}
                    onChange={(e) => setUserPincode(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 mx-auto block w-[365px] border-2 px-5 py-2 rounded-lg border-black border-b-4 text-gray-300 hover:bg-black delay-75 translate-y-2 border-l-4"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
