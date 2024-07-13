import React from "react";
import { MdPlace } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { CgTimelapse } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";

function OrderCard({
  status,
  image,
  wasteType,
  date,
  time,
  customerName,
  customerPhone,
  customerAddress,
}) {
  return (
    <div
      aria-label="card-item-v2"
      className={`flex flex-col relative w-[380px] h-[380px] shadow-lg bg-gray-900 rounded-lg`}
    >
      {/* Order Status */}
      <div
        className={`absolute font-bold top-5 left-2 px-2 py-1 rounded z-10 
                      ${
                        status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500 text-black"
                      }`}
      >
        {status}
      </div>

      <div className="flex gap-3 px-3 pt-3">
        {/* Image */}
        <div className="relative flex-shrink-0 mb-4 h-[160px] w-[210px]">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* Order Details */}
        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-bold font-mono mt-2 text-center">{wasteType}</h3>
          <div className="flex gap-2 items-center">
            <MdDateRange />
            <p className=""> {date} </p>
          </div>
          <div className="flex gap-2 items-center">
            <CgTimelapse />
            <p className=""> {time} </p>
          </div>
        </div>
      </div>

      {/* Custoemr Details */}
      <div className="px-3">
        <div className="flex items-center gap-2">
          <BsPersonCircle />
          <p className="font-semibold">{customerName}</p>
        </div>
        <div className="flex items-center gap-2">
          <AiTwotonePhone />
          <p className="font-semibold">{customerPhone}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdPlace />
          <p className="font-semibold">{customerAddress}</p>
        </div>
      </div>
      <div className="p-2 shadow bg-gray-800 rounded mt-3"></div>
      {status !== "Completed" ? (
        <div className="flex justify-center gap-4 my-3">
          <button className="btn text-white border-1 pb-2 border-green-900 hover:bg-green-900 px-3">
            Accept
          </button>
          <button className="btn text-white border-1 pb-2 border-red-900 hover:bg-red-900 px-3">
            Reject
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-4 my-3">
          <p className="">
            Collected 5kg for
            <span className="border-b font-bold border-green-500"> ₹400</span> 💵
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderCard;
