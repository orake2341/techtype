import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { fetchJobOrders } from "../../state/joborderlist/jobOrderListSlice";
import { setSelectedJobOrder } from "../../state/joborder/jobOrderSlice";
import { MdOutlinePayments } from "react-icons/md";

const Joborder = () => {
  const navigate = useNavigate();

  const jobOrderList = useSelector(
    (state: RootState) => state.joborderlist.list
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleModalState = (jobOrderData: JobOrder | null) => {
    if (jobOrderData) {
      navigate(`${jobOrderData._id}`, { replace: true });
      dispatch(setSelectedJobOrder(jobOrderData));
    } else {
      navigate("newjoborder", { replace: true });
    }
  };

  useEffect(() => {
    dispatch(fetchJobOrders());
  }, [dispatch]);

  return (
    <section className="flex flex-col h-screen px-8 py-4">
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
                onClick={() => handleModalState(null)}
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
            {jobOrderList.length === 0 ? (
              <tr>
                <td colSpan={6}>No data available</td>
              </tr>
            ) : (
              jobOrderList.map((jobOrder) => (
                <tr key={jobOrder._id}>
                  <td>#JO00001</td>
                  <td>{jobOrder.JOStatus}</td>
                  <td>{jobOrder.PaymentStatus}</td>
                  <td>{jobOrder.selectedDate}</td>
                  <td>{jobOrder.jobSite}</td>
                  <td className="flex justify-center gap-3">
                    <button onClick={() => handleModalState(jobOrder)}>
                      <FaEye />
                    </button>
                    <button>
                      <MdOutlinePayments />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Outlet />
    </section>
  );
};

export default Joborder;
