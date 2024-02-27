import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-end">
          <button className="text-gray-600 hover:text-gray-800">
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
        <form className="flex flex-col mt-4 gap-4">
          <h1 className="text-center text-4xl font-bold">Order Summary</h1>
          <div className="flex flex-col"></div>
          <div className="flex justify-between items-center">
            <span>Subtotal:</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Handling Fee:</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Total:</span>
          </div>
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
