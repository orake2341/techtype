import React, { useState, useEffect } from "react";
import PaymentModal from "../../components/AdminJoborder/paymentmodal";
import { useNavigate, Outlet } from "react-router-dom";

const JobOrder = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [jobOrders, setJobOrders] = useState([
    {
      id: 1,
      joNumber: "JO001",
      customerName: "Mark Baes",
      paymentStatus: "pending",
      services: [
        {
          id: 1,
          typeofservice: "Keyboard Modding",
          typeofkeyboardmods: "Foam mod",
          keyboarddeepclean: false,
          keycapcleaning: false,
          switchlubing: false,
          description: "sadadfsaf",
        },
        {
          id: 1,
          typeofservice: "Keyboard Modding",
          typeofkeyboardmods: "Tape mod",
          keyboarddeepclean: true,
          keycapcleaning: false,
          switchlubing: true,
          description: "fdsfds",
        },
      ],
      dueDate: "4/24/24",
      jobSite: "Onsite",
      JOstatus: "created",
    },
    {
      id: 2,
      joNumber: "JO002",
      customerName: "John Paul",
      paymentStatus: "pending",
      dueDate: "4/24/24",
      jobSite: "Home",
      JOstatus: "active",
    },
    {
      id: 3,
      joNumber: "JO003",
      customerName: "David Foster",
      paymentStatus: "pending",
      dueDate: "4/24/24",
      jobSite: "Onsite",
      JOstatus: "completed",
    },
  ]);

  const [filteredJobOrders, setFilteredJobOrders] = useState([]);

  useEffect(() => {
    filterJobOrders("created");
  }, []);

  const handleFormState = (jobOrderData: any) => {
    navigate(`joborderform/${jobOrderData.id}`, {
      replace: true,
      state: { jobOrderData },
    });
    console.log(jobOrderData);
  };

  const filterJobOrders = (status: any) => {
    const filtered: any = jobOrders.filter(
      (jobOrder) => jobOrder.JOstatus === status
    );
    setFilteredJobOrders(filtered);
  };

  const CreatePayment = (jobOrderData: any) => {
    navigate(`payment/${jobOrderData.id}`, {
      replace: true,
      state: { jobOrderData },
    });
    console.log("Creating payment details for job order ID:", jobOrderData.id);
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
                    {filteredJobOrders.map((jobOrder: any) => (
                      <tr key={jobOrder.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.joNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.customerName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.paymentStatus}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.dueDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.jobSite}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {jobOrder.JOstatus === "created" && (
                            <div>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => handleFormState(jobOrder)}
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
                          {jobOrder.JOstatus === "active" && (
                            <div>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => handleFormState(jobOrder)}
                              >
                                Preview
                              </button>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => handleFormState(jobOrder)}
                              >
                                Finish
                              </button>
                            </div>
                          )}

                          {jobOrder.JOstatus === "completed" && (
                            <div>
                              <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() =>
                                  console.log("Accepted", jobOrder.id)
                                }
                              >
                                Accept
                              </button>
                              <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() =>
                                  console.log("Rejected", jobOrder.id)
                                }
                              >
                                Reject
                              </button>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() =>
                                  console.log("Accepted", jobOrder.id)
                                }
                              >
                                Accept
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
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
