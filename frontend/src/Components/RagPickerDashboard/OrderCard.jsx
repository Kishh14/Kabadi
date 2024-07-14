// import React, { useEffect } from "react";
// import { MdPlace } from "react-icons/md";
// import { AiTwotonePhone } from "react-icons/ai";
// import { BsPersonCircle } from "react-icons/bs";
// import { CgTimelapse } from "react-icons/cg";
// import { MdDateRange } from "react-icons/md";

// function OrderCard({
//   status,
//   image,
//   wasteType,
//   date,
//   time,
//   customerName,
//   customerPhone,
//   customerAddress,
//   acceptOrder,
// }) {
//   return (
//     <div
//       aria-label="card-item-v2"
//       className={`flex flex-col relative w-[380px] h-[380px] shadow-lg bg-gray-900 rounded-lg`}
//     >
//       {/* Order Status */}
//       <div
//         className={`absolute font-bold top-5 left-2 px-2 py-1 rounded z-10 
//                       ${
//                         status === "Completed"
//                           ? "bg-green-500"
//                           : "bg-yellow-500 text-black"
//                       }`}
//       >
//         {status}
//       </div>

//       <div className="flex gap-3 px-3 pt-3">
//         {/* Image */}
//         <div className="relative flex-shrink-0 mb-4 h-[160px] w-[210px]">
//           <img
//             src={image}
//             alt=""
//             className="object-cover w-full h-full rounded-lg"
//           />
//         </div>
//         {/* Order Details */}
//         <div className="flex flex-col mt-4 gap-2">
//           <h3 className="font-bold font-mono mt-2 text-center">{wasteType}</h3>
//           <div className="flex gap-2 items-center">
//             <MdDateRange />
//             <p className=""> {date} </p>
//           </div>
//           <div className="flex gap-2 items-center">
//             <CgTimelapse />
//             <p className=""> {time} </p>
//           </div>
//         </div>
//       </div>

//       {/* Custoemr Details */}
//       <div className="px-3">
//         <div className="flex items-center gap-2">
//           <BsPersonCircle />
//           <p className="font-semibold">{customerName}</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <AiTwotonePhone />
//           <p className="font-semibold">{customerPhone}</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <MdPlace />
//           <p className="font-semibold">{customerAddress}</p>
//         </div>
//       </div>
//       <div className="p-2 shadow bg-gray-800 rounded mt-3"></div>
//       {status !== "Completed" ? (
//         <div className="flex justify-center gap-4 my-3">
//           <button
//             onClick={acceptOrder}
//             className="btn text-white border-1 pb-2 border-green-900 hover:bg-green-900 px-3"
//           >
//             Accept
//           </button>
//           <button className="btn text-white border-1 pb-2 border-red-900 hover:bg-red-900 px-3">
//             Reject
//           </button>
//         </div>
//       ) : (
//         <div className="flex justify-center gap-4 my-3">
//           <p className="">
//             Collected 5kg for
//             <span className="border-b font-bold border-green-500">
//               {" "}
//               ₹400
//             </span>{" "}
//             💵
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrderCard;
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
<<<<<<< HEAD

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
            <button className="btn bg-red-500 hover:bg-red-600 border border-red-600 text-white px-4 py-2">
              Reject
            </button>
          </>
        ) : (
          <p className="text-center text-gray-300">
            Collected 5kg for{" "}
            <span className="border-b border-green-500 font-bold">₹400</span>{" "}
=======
      <div className="p-2 shadow bg-gray-800 rounded mt-3"></div>
      {status !== "Completed" ? (
        <div className="flex justify-center gap-4 my-3">
          <button
            onClick={acceptOrder}
            className="btn text-white border-1 pb-2 border-green-900 hover:bg-green-900 px-3"
          >
            Accept
          </button>
          <button
            onClick={() => rejectOrder(orderId)}
            className="btn text-white border-1 pb-2 border-red-900 hover:bg-red-900 px-3"
          >
            Reject
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-4 my-3">
          <p className="">
            Collected 5kg for
            <span className="border-b font-bold border-green-500">
              {" "}
              ₹400
            </span>{" "}
>>>>>>> 7006d4103baab2902cdb503998582fe228539289
            💵
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderCard;

