import React from "react";

function OrderCard({ image, name, weight, price, deliveryCharges, status }) {
  return (
    <div
      aria-label="card-item-v2"
      className={`flex flex-col relative w-[380px] bg-gray-900 rounded-lg`}
    >
      {/* Order Status */}
      <div
        className={`absolute top-3 left-3 px-3 py-2 rounded z-10 ${
          status === "Completed" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {status}
      </div>
      {/* Image */}
      <div className="relative flex-shrink-0 mb-4 h-[250px]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="font-bold">{name}</h3>
          <p className="text-md text-gray-300"> {weight} collected </p>
        </div>
        <div className="p-2 bg-gray-800 rounded mt-3">
          {/* <span>Total</span> */}
          <div className="flex justify-between mb-1">
            <span className="block"> {name} </span>
            <span className="block"> ₹{price} </span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="block"> Delivery charges </span>
            <span className="block"> ₹{deliveryCharges} </span>
          </div>

          <div className="flex justify-between mb-1">
            <span className="block">
              {" "}
              {status === "Completed"
                ? "Received Total"
                : "Total (to be received)"}{" "}
            </span>
            <span className="">₹{Number(price) - Number(deliveryCharges)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
