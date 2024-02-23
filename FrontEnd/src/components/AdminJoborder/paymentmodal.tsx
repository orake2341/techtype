import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSummaryModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobOrderData } = location.state || {};

  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [handlingFee, setHandlingFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (jobOrderData && jobOrderData.services) {
      setItems(jobOrderData.services);
      // Calculate subtotal
      const subTotal = jobOrderData.services.reduce(
        (acc, service) => acc + parseFloat(service.price),
        0
      );
      setSubtotal(subTotal);
    }
  }, [jobOrderData]);

  useEffect(() => {
    const totalAmount = subtotal + handlingFee;
    setTotal(totalAmount);
  }, [subtotal, handlingFee]);

  const onClose = () => {
    navigate(-1);
  };

  const handleServicePriceChange = (index, newPrice) => {
    const updatedItems = [...items];
    updatedItems[index].price = parseFloat(newPrice);
    setItems(updatedItems);
  };

  const onSubmit = () => {
    // Add your submit logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
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
        <form className="flex flex-col mt-4 gap-4">
          <h1 className="text-center text-4xl font-bold">Order Summary</h1>
          <div className="flex flex-col">
            {items.map((service, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{service.typeofservice}</span>
                <input
                  type="text"
                  value={service.price}
                  onChange={(e) => handleServicePriceChange(index, e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span>Subtotal:</span>
            <span>{subtotal}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Handling Fee:</span>
            <input
              type="text"
              value={handlingFee}
              onChange={(e) => setHandlingFee(parseFloat(e.target.value))}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span>{total}</span>
          </div>
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderSummaryModal;
