import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const picture = location.state;
  const [preview, setPreview] = useState<string | ArrayBuffer | null>();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => navigate("../")}
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
        <div className="mb-12">
          <h2 className="text-3xl text-center block font-bold">Payment</h2>
          <div>
            <img
              src={picture as string}
              alt="Payment picture"
              className="max-w-full max-h-px-200 mx-4 block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentImage;
