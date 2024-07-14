import { BsWallet2 } from "react-icons/bs";
import React, { useContext } from "react";
import OrderCard from "./OrderCard";
import Header from "../LandingPage/Header/Header";
import { ContextStore } from "../../ContextStore";

function RagPickerDash() {
  const receivedOrders = [
    {
      id: "001",
      wasteType: "Papers",
      image:
        "https://th.bing.com/th/id/OIP.KuS2FI2YONdIrWOUb8tHSAHaHa?rs=1&pid=ImgDetMain",
      date: "2024-01-01",
      time: "12-04 AM",
      status: "Received",
      customerName: "Jhon",
      customerPhone: "+9876543214",
      customerAddress: "321 Brooklyn, opp BOA, NY 45712",
    },
  ];

  const { currentUserID } = useContext(ContextStore);

  const acceptOrder = () => {
    console.log(currentUserID);
  };

  const rejectOrder = (orderID) => {
    let con = confirm(
      `Are you sure you wanna reject the order with the ID ${orderID} ?`
    );
    if (con) {
      receivedOrders.filter((order) => {
        if (order.id === orderID) {
          return (order.status = "Rejected");
        }
      });
      alert("Order rejected!");
    } else {
      alert("Thank you for your cooperation!");
    }
  };

  return (
    <>
      <Header />
      <section className="bg-black text-white h-screen w-full">
        <div className="px-32 flex flex-col items-center my-14">
          <h1 className="" style={{ fontSize: "29px" }}>
            Hello, <span className="text-blue-500">RagPicker</span> 👋🏻
          </h1>
          <p className="mt-1 text-gray-500">Start you day with a smile...</p>
        </div>

        {/* Appointments aka orders */}
        <section className="px-20 my-8">
          <div className="my-4">
            <h3 className="">All Orders</h3>
            <div className="flex items-center flex-wrap gap-12 border-1 border-gray-500 mt-4 p-3 rounded ps-5">
              {receivedOrders.map((order) => {
                return (
                  <OrderCard
                    key={order.id}
                    orderId={order.id}
                    status={order.status}
                    image={order.image}
                    wasteType={order.wasteType}
                    date={order.date}
                    time={order.time}
                    customerName={order.customerName}
                    customerPhone={order.customerPhone}
                    customerAddress={order.customerAddress}
                    acceptOrder={acceptOrder}
                    rejectOrder={rejectOrder}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Earnings */}
        <section className="px-20 my-16 pb-20">
          <div className="my-4">
            <h3 className="">Your Earnings</h3>
            <div className="flex items-center justify-center gap-12 border-1 border-gray-500 mt-4 p-3 rounded ps-5">
              <div className="bg-green-200 rounded h-[170px] flex flex-col justify-center border-1 border-green-700 py-4 w-[400px] text-black">
                <div className="flex items-center ms-10 gap-5">
                  <div className="p-4 flex items-center justify-center rounded-full bg-green-600">
                    <BsWallet2 size={50} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">This Month</p>
                    <p className="text-2xl font-semibold">₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-200 rounded h-[170px] flex flex-col justify-center border-1 border-green-700 py-4 w-[400px] text-black">
                <div className="flex items-center ms-10 gap-5">
                  <div className="p-4 flex items-center justify-center rounded-full bg-green-600">
                    <BsWallet2 size={50} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">This Week</p>
                    <p className="text-2xl font-semibold">₹400</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-200 rounded h-[170px] flex flex-col justify-center border-1 border-green-700 py-4 w-[400px] text-black">
                <div className="flex items-center ms-10 gap-5">
                  <div className="p-4 flex items-center justify-center rounded-full bg-green-600">
                    <BsWallet2 size={50} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg">All</p>
                    <p className="text-2xl font-semibold">₹2000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default RagPickerDash;
