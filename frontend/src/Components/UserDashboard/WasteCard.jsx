import React, { useState } from "react";

function WasteCard({ image, name, desc, price, setWasteType }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      aria-label="card-item-v2"
      className={`flex flex-col w-[380px] border-3 p-3 bg-black rounded-lg cursor-pointer hover:border-green-500 ${
        selected && "border-green-500"
      }`}
      onClick={() => {
        setWasteType(name);
        setSelected(!selected);
      }}
    >
      {/* Image */}
      <div className="relative flex-shrink-0 mb-4 h-[250px]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-lg"
          style={{ backdropFilter: "" }}
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-300"> {desc} </p>
        </div>
        <div className="flex items-center p-2 bg-gray-800 rounded-xl">
          <span>
            from <span> {price} </span> 💵 / kg
          </span>
        </div>
      </div>
    </div>
  );
}

export default WasteCard;
