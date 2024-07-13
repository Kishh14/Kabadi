import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";
import WasteCard from "./WasteCard";
import OrderCard from "./OrderCard";
import TimeBox from "./TimeBox";
import Header from "../LandingPage/Header/Header";

function UserDashboard() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [wasteType, setWasteType] = useState();

  const wasteData = [
    {
      image:
        "https://th.bing.com/th/id/OIP.KuS2FI2YONdIrWOUb8tHSAHaHa?rs=1&pid=ImgDetMain",
      name: "Papers",
      desc: "(cardboard, newspapers)",
      price: "₹1 - ₹5",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/crushed-plastic-bottles-recycling-crumpled-clear-waste-pollution-management-224719632.jpg",
      name: "Plastic Bottles",
      desc: "(PET, HDPE, PVC)",
      price: "₹5 - ₹15",
    },
    {
      image:
        "https://img.freepik.com/free-photo/metal-cans-white-background_93675-132354.jpg",
      name: "Metal Cans",
      desc: "(aluminium, steel)",
      price: "₹10 - ₹20",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.5c7uLCiPdemkQW4R_0IcuQHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
      name: "Glass Bottles",
      desc: "(clear, colored)",
      price: "₹2 - ₹5",
    },
  ];

  const orderData = [
    {
      image:
        "https://th.bing.com/th/id/OIP.KuS2FI2YONdIrWOUb8tHSAHaHa?rs=1&pid=ImgDetMain",
      name: "Papers",
      weight: "5kg",
      price: "400",
      deliveryCharges: "20",
      status: "In-progress",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/crushed-plastic-bottles-recycling-crumpled-clear-waste-pollution-management-224719632.jpg",
      name: "Plastic Bottles",
      weight: "5kg",
      price: "400",
      deliveryCharges: "20",
      status: "Completed",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.5c7uLCiPdemkQW4R_0IcuQHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
      name: "Glass Bottles",
      weight: "5kg",
      price: "400",
      deliveryCharges: "20",
      status: "Completed",
    },
  ];

  const timeSlots = ["08-12 AM", "12-04 AM", "04-08 AM"];

  const handleTimeChange = (time) => {
    setTime(time);
  };

  return (
    <>
      <Header />
      <section className="bg-black text-white h-screen w-full">
        {/* Nav */}
        {/* <section className="my-4 flex items-center justify-between px-20">
        <div className="flex items-center gap-2 cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">
          <div className="cursor-pointer">
            <CiLocationOn size={26} />
          </div>
          <div className="">Select location</div>
        </div>

        <div className="cursor-pointer">
          <IoIosNotificationsOutline size={27} />
        </div>
      </section> */}

        {/* Booking */}
        <section className="px-20 my-8">
          <div className="my-4">
            <h3 className="">Choose Slot</h3>
            <div className="flex items-center gap-12 border-1 border-gray-500 mt-4 p-3 rounded ps-5">
              {/* Date */}
              <div className="">
                <div className="cursor-pointer w-36 bg-white rounded text-black p-1">
                  <input
                    type="date"
                    name=""
                    className="border-0 outline-none"
                    id=""
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Time */}
              <div className="">
                <div className="flex items-center gap-2">
                  {timeSlots.map((time, index) => {
                    return (
                      <TimeBox
                        time={time}
                        key={index}
                        handleTimeChange={handleTimeChange}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Waste type */}
          <div className="my-4">
            <h3 className="">Waste type</h3>
            <div className="border-1 border-gray-500 p-3 mt-4 rounded ps-5">
              {/* Waste Cards */}
              <div className="flex gap-4 flex-wrap overflow-x-auto h-[370px]">
                {wasteData.map((waste, index) => {
                  return (
                    <WasteCard
                      key={index}
                      image={waste.image}
                      name={waste.name}
                      desc={waste.desc}
                      price={waste.price}
                      setWasteType={setWasteType}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="my-4">
            <h3 className="">Confirm Address</h3>
            <div className="border-1 border-gray-500 p-3 mt-4 rounded ps-5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name=""
                  id=""
                />
                <p>321 Brooklyn bridge, opp BOA, NY 45712</p>
              </div>
              <span className="text-gray-400">
                You can change your address on your profile page
              </span>
            </div>
          </div>

          <button className="bookNow-btn mt-5 block mx-auto w-[300px]">
            Book Now
          </button>
        </section>

        {/* Orders */}
        <section className="px-20 my-20 pb-[50px]">
          <h3 className="text-white">My Orders</h3>
          <div className="flex items-center gap-4 flex-wrap border-1 border-gray-500 mt-4 p-3 rounded ps-5">
            {orderData.map((order, index) => {
              return (
                <OrderCard
                  key={index}
                  name={order.name}
                  image={order.image}
                  weight={order.weight}
                  price={order.price}
                  wasteData={wasteData}
                  status={order.status}
                  deliveryCharges={order.deliveryCharges}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}

export default UserDashboard;
