import React from "react";
import { MdPlace } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { CgTimelapse } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";

function OrderCard({
  orderId,
  status,
  image,
  wasteType,
  date,
  time,
  customerName,
  customerPhone,
  customerAddress,
  acceptOrder,
  rejectOrder,
}) {
  return (
    <div className="w-[380px] h-[460px] shadow-lg bg-gray-900 rounded-lg overflow-hidden">
      {/* Order Status */}
      <div
        className={`absolute top-0 left-0 px-2 py-1 rounded font-bold z-10 ${
          status === "Completed" ? "bg-green-500" : "bg-yellow-500 text-black"
        }`}
      >
        {status}
      </div>

      {/* Image */}
      <div className="relative h-[160px]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      {/* Order Details */}
      <div className="px-4 py-3">
        <h3 className="font-bold text-lg text-center mt-2">{wasteType}</h3>
        <div className="flex items-center mt-3">
          <MdDateRange className="text-gray-400" />
          <p className="ml-2 text-gray-300">{date}</p>
        </div>
        <div className="flex items-center mt-1">
          <CgTimelapse className="text-gray-400" />
          <p className="ml-2 text-gray-300">{time}</p>
        </div>
      </div>

      {/* Customer Details */}
      <div className="px-4 mt-3">
        <div className="flex items-center mb-2">
          <BsPersonCircle className="text-gray-400" />
          <p className="ml-2 text-gray-300 font-semibold">{customerName}</p>
        </div>
        <div className="flex items-center mb-2">
          <AiTwotonePhone className="text-gray-400" />
          <p className="ml-2 text-gray-300 font-semibold">{customerPhone}</p>
        </div>
        <div className="flex items-center">
          <MdPlace className="text-gray-400" />
          <p className="ml-2 text-gray-300 font-semibold">{customerAddress}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center mt-4">
        {status !== "Completed" ? (
          <>
            <button
              onClick={acceptOrder}
              className="btn bg-green-500 hover:bg-green-600 border border-green-600 text-white px-4 py-2 mr-2"
            >
              Accept
            </button>
            <button
              onClick={() => rejectOrder(orderId)}
              className="btn bg-red-500 hover:bg-red-600 border border-red-600 text-white px-4 py-2"
            >
              Reject
            </button>
          </>
        ) : (
          <p className="text-center text-gray-300">
            Collected 5kg for{" "}
            <span className="border-b border-green-500 font-bold">₹400</span>{" "}
            💵
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
