import React, { useState, useEffect } from "react";
import PaymentModal from "../../components/AdminJoborder/paymentmodal";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";

interface JobOrderData {
  _id: string;
  firstName: string;
  JobOrder: {
    _id: string;
    joNumber?: string;
    PaymentStatus?: string;
    selectedDate?: string;
    jobSite?: string;
    JOStatus?: string;
    services?: {
      id?: string;
      typeofservice?: string;
      typeofkeyboardmods?: string;
      keyboarddeepclean?: boolean;
      keycapcleaning?: boolean;
      switchlubing?: boolean;
      cleaningMethod?: string;
      processor?: string;
      graphicsCard?: string;
      description?: string;
    }[];
  }[];
}

const JobOrder = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [jobOrders, setJobOrders] = useState<JobOrderData[]>([]);
  const [filteredJobOrders, setFilteredJobOrders] = useState<JobOrderData[]>(
    []
  );

  const fetchJobOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user/getUser");
      console.log(response.data);
      setJobOrders(response.data);
      console.log(jobOrders);
    } catch (error) {
      console.error("Error fetching job orders:", error);
    }
  };

  useEffect(() => {
    fetchJobOrders();
    setFilteredJobOrders(jobOrders);
  }, []);

  const openForm = (jobOrderData: JobOrderData) => {
    navigate(`joborderform/${jobOrderData._id}`, {
      replace: true,
      state: { jobOrderData },
    });
    console.log(jobOrderData);
  };

  const filterJobOrders = (status: string) => {
    const filtered = jobOrders.filter((jobOrder) => {
      return jobOrder.JobOrder.some((order) => order.JOStatus === status);
    });
    setFilteredJobOrders(filtered);
  };

  const CreatePayment = (jobOrderData: JobOrderData) => {
    navigate(`payment/${jobOrderData._id}`, {
      replace: true,
      state: { jobOrderData },
    });
    console.log("Creating payment details for job order ID:", jobOrderData._id);
    console.log(jobOrderData);
  };

  return (
    <section className="flex flex-col h-screen">
      <h2 className="text-2xl font-bold mb-4">Job Orders</h2>

      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => filterJobOrders("created")}
        >
          Created JO
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => filterJobOrders("active")}
        >
          Accepted JO
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterJobOrders("completed")}
        >
          Completed JO
        </button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <div className="mx-4">
          <div className="shadow rounded-lg overflow-auto">
            <div className="flex justify-center">
              <div className="max-h-96 overflow-auto w-full">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        JO Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Due Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobOrders.map((jobOrder) =>
                      jobOrder.JobOrder.map((order) => (
                        <tr key={order._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.firstName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.JOStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.selectedDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.jobSite}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.JOStatus === "created" && (
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => openForm(jobOrder)}
                                >
                                  Preview
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => CreatePayment(jobOrder)}
                                >
                                  Payment
                                </button>
                              </div>
                            )}
                            {order.JOStatus === "active" && (
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => openForm(jobOrder)}
                                >
                                  Preview
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => openForm(jobOrder)}
                                >
                                  Finish
                                </button>
                              </div>
                            )}

                            {order.JOStatus === "completed" && <div></div>}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default JobOrder;
