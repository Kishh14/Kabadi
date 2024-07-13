import React, { useState } from "react";

function TimeBox({ time, handleTimeChange }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`text-black cursor-pointer text-center bg-blue-200 hover:bg-green-400 ${
        isSelected && "bg-green-400"
      } p-1 rounded w-36`}
      onClick={() => {
        handleTimeChange(time);
        setIsSelected(!isSelected);
      }}
    >
      {time}
    </div>
  );
}

export default TimeBox;
