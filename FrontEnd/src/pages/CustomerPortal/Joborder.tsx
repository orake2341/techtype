import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Modal from "../../components/Joborder/modal";
import { Outlet, useNavigate } from "react-router-dom";

const Joborder = () => {
  const navigate = useNavigate();

  const handleNewJobOrder = () => {
    navigate("joborderform");
  };

  return (
    <section className="flex flex-col w-5/6 h-screen px-8 py-4">
      <div className="flex flex-col h-1/5 gap-y-24">
        <h1 className="text-2xl font-bold">JobOrder</h1>
        <div className="flex items-center w-full">
          <div className="flex-grow ">
            <h3>Sort By: JO#</h3>
          </div>
          <div className="flex justify-end">
            <div className="">
              <button
                className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full "
                onClick={handleNewJobOrder}
              >
                New Job Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4/5">
        <table className="table-fixed w-full">
          <thead className="bg-CACACAC ">
            <tr>
              <th className="border-2">JO#</th>
              <th className="border-2">JO Status</th>
              <th className="border-2">Payment Status</th>
              <th className="border-2">Due Date</th>
              <th className="border-2">Job Location</th>
              <th className="border-2">Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>JO-00000002</td>
              <td>Started</td>
              <td>Pending</td>
              <td>09/02/2024</td>
              <td>Davao</td>
              <td className="text-center">
                <FaEye />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Outlet />
    </section>
  );
};

export default Joborder;
