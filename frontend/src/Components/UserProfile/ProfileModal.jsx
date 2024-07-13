import React from "react";
import Button from "./Button";

function ProfileModal({
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
}) {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const time = ["08-12 AM", "12-04 AM", "04-08 AM"];

  const handleForm = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      userPhone,
      daysAvailable,
      timeAvailable,
      userLocation,
    };
    console.log("form submitted");
    console.log(userData);
  };

  return (
    <div className="w-1/3 bg-gray-800 rounded absolute right-0 z-20 shadow-lg">
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
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </label>
              </div>

              <div className="">
                {/* Days Available */}
                <div className="p-3 flex-1 border-2 mt-3 border-black rounded">
                  <h1 className="text-lg font-semibold text-zinc-400">
                    Days Available :
                  </h1>
                  <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                    {days.map((day, index) => {
                      return (
                        <Button
                          key={index}
                          day={day}
                          setDaysAvailable={setDaysAvailable}
                        />
                      );
                    })}
                  </p>
                </div>

                {/* Time Available */}
                <div className="p-3 flex-1 border-2 mt-3 border-black rounded">
                  <h1 className="text-lg font-semibold text-zinc-400">
                    Time Available :
                  </h1>
                  <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                    {time.map((time, index) => {
                      return (
                        <Button
                          key={index}
                          day={time}
                          setTimeAvailable={setTimeAvailable}
                        />
                      );
                    })}
                  </p>
                </div>
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
                  placeholder="Your/shop address"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
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
  );
}

export default ProfileModal;
