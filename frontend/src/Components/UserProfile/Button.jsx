import React, { useState } from "react";

function Button({ day, setDaysAvailable, setTimeAvailable }) {
  const [isDaysSelected, setIsDaysSelected] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsDaysSelected(!isDaysSelected);
        setDaysAvailable((prev) => [...prev, day]);
      }}
      className={`border-2 border-black rounded-md border-b-4 border-l-4 text-gray-400 px-2 ${
        isDaysSelected && "bg-green-800 text-white"
      }`}
    >
      {day}
    </button>
  );
}

export default Button;
