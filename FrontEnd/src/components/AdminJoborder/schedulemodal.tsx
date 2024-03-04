import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScheduleModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const data = location.state;
  const handleConfirm = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/payment/confirmpayment",
        {
          userid: data.userid,
          joid: data.joid,
          dueDate: date,
          amount: data.amount,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting job order:", error);
    }
    navigate("../../../");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => navigate("../../")}
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
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl text-center block font-bold">Set Duedate</h2>
          <div className="flex flex-col">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              className="items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
