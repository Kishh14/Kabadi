import React, { useContext, useEffect, useState } from "react";
import WasteCard from "./WasteCard";
import OrderCard from "./OrderCard";
import TimeBox from "./TimeBox";
import Header from "../LandingPage/Header/Header";
import { ContextStore } from "../../ContextStore";
import { databases } from "../../../Appwrite";

function UserDashboard() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [wasteType, setWasteType] = useState();
  const [usersData, setUsersData] = useState([]);
  const { currentUserID } = useContext(ContextStore);
  const [hereItIs, setHereItIs] = useState("");

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

  const handleUserFetch = () => {
    const listDoc = databases.listDocuments(
      "669355b80023d49b2370",
      "669355fa000f8996c0ca"
    );
    listDoc.then(
      function (response) {
        setUsersData(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    handleUserFetch();
    handleUserFetch();
    console.log(usersData);

    const checkthis = usersData.filter((UsData) => {
      if (UsData.$id === currentUserID) {
        return UsData;
      }
    });

    console.log(checkthis);
    setHereItIs(checkthis);
  }, []);

  return (
    <>
      <Header />

      <p className="text-white">{hereItIs[0]?.userLocation}</p>
      <section className="bg-black text-white h-screen w-full">
        {/* Booking */}
        <section className="px-6 md:px-20 my-8">
          <div className="my-4">
            <h3>Choose Slot</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 border border-gray-500 mt-4 p-3 rounded-lg">
              <div className="w-full md:w-auto">
                <div className="cursor-pointer w-full md:w-36 bg-white rounded text-black p-1">
                  <input
                    type="date"
                    className="border-0 outline-none w-full"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center gap-2">
                {timeSlots.map((time, index) => (
                  <TimeBox
                    time={time}
                    key={index}
                    handleTimeChange={handleTimeChange}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Waste type */}
          <div className="my-4">
            <h3>Waste Type</h3>
            <div className="border border-gray-500 p-3 mt-4 rounded-lg">
              <div className="flex gap-4 flex-wrap overflow-x-auto h-[370px]">
                {wasteData.map((waste, index) => (
                  <WasteCard
                    key={index}
                    image={waste.image}
                    name={waste.name}
                    desc={waste.desc}
                    price={waste.price}
                    setWasteType={setWasteType}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="my-4">
            <h3>Confirm Address</h3>
            <div className="border border-gray-500 p-3 mt-4 rounded-lg">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                <p>321 Brooklyn bridge, opp BOA, NY 45712</p>
              </div>
              <span className="text-gray-400">
                You can change your address on your profile page
              </span>
            </div>
          </div>

          <button className="bookNow-btn mt-5  block mx-auto w-[300px] py-2 bg-green-500 rounded-lg text-black hover:bg-green-600 transition">
            Book Now
          </button>
        </section>

        {/* Orders */}
        <section className="px-6 md:px-20 my-20 pb-[50px]">
          <h3 className="text-white">My Orders</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap border border-gray-500 mt-4 p-3 rounded-lg">
            {orderData.map((order, index) => (
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
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default UserDashboard;

