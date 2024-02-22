import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentModal = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const { jobOrderData } = Location.state || {};

  const onClose = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form className=" flex  flex-col mt-4 gap-8">
            <h1 className="text-center text-4xl font-bold">Payment</h1>
            {jobOrderData &&
              jobOrderData.services &&
              jobOrderData.services.map((service: any, index: number) => (
                <div key={index} className="flex">
                  <div>{service.typeofservice}</div>
                  <input type="text" />
                </div>
              ))}
            <button
              className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full "
              onClick={() => console.log(jobOrderData.id)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
