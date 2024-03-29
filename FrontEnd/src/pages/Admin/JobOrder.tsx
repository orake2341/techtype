import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { setSelectedJobOrder } from "../../state/joborder/jobOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { fetchAllJobOrders } from "../../state/joborderlist/jobOrderListSlice";
import { setPaymentDetails } from "../../state/paymentdetails/paymentDetailsSilce";
import axios from "axios";

const JobOrder = () => {
  const navigate = useNavigate();
  const [filteredJobOrders, setFilteredJobOrders] = useState([]);
  const dispatch = useDispatch<AppDispatch>();

  const jobOrderList = useSelector(
    (state: RootState) => state.joborderlist.list
  );

  useEffect(() => {
    filterJobOrders("Pending");
  }, []);

  const openForm = (jobOrderData: JobOrder, userid: string) => {
    console.log(jobOrderData.PaymentDetails);
    if (jobOrderData) {
      navigate(`joborderform/${jobOrderData._id}`, {
        replace: true,
        state: userid,
      });
      dispatch(setSelectedJobOrder(jobOrderData));
      dispatch(setPaymentDetails(jobOrderData.PaymentDetails));
    } else {
      navigate("newjoborder", { replace: true });
    }
  };

  const filterJobOrders = (status: any) => {
    dispatch(fetchAllJobOrders());
    const filtered: any = jobOrderList.filter(
      (jobOrder) => jobOrder.JOStatus === status
    );
    setFilteredJobOrders(filtered);
  };

  const updateJOStatus = async (uid: string, joid: string) => {
    try {
      const response = await axios.put(
        "http://localhost:4000/joborder/completestatus",
        { uid: uid, joid: joid }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting job order:", error);
    }
  };

  return (
    <section className="flex flex-col h-screen px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">Job Orders</h2>

      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => filterJobOrders("Pending")}
        >
          New JO
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => filterJobOrders("Active")}
        >
          Active JO
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterJobOrders("Complete")}
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
                        JO Status
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
                    {filteredJobOrders.length > 0 ? (
                      filteredJobOrders.map((jobOrder: any) => (
                        <tr key={jobOrder._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.joid}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.PaymentStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.JOStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.DueDateAt
                              ? jobOrder.DueDateAt.substring(0, 10)
                              : ""}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.jobSite}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {jobOrder.JOStatus === "Pending" && (
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() =>
                                    openForm(jobOrder, jobOrder._userid)
                                  }
                                >
                                  Preview
                                </button>
                              </div>
                            )}
                            {jobOrder.JOStatus === "Active" && (
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() =>
                                    openForm(jobOrder, jobOrder._userid)
                                  }
                                >
                                  Preview
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() =>
                                    updateJOStatus(
                                      jobOrder._userid,
                                      jobOrder._id
                                    )
                                  }
                                >
                                  Complete
                                </button>
                              </div>
                            )}

                            {jobOrder.JOStatus === "Complete" && (
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() =>
                                    openForm(jobOrder, jobOrder._userid)
                                  }
                                >
                                  Preview
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                        >
                          No job orders found.
                        </td>
                      </tr>
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
