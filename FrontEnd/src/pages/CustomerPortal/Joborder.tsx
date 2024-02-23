import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface NestedDocument {
  _id: string;
  id: string;
  JOStatus: string;
  PaymentStatus: string;
  selectedDate: string;
  jobSite: string;
  services: [];
}
const Joborder = () => {
  const navigate = useNavigate();

  const [nestedDocuments, setNestedDocuments] = useState<NestedDocument[]>([]);

  const handleModalState = (jobOrderData: any) => {
    navigate(jobOrderData !== null ? `${jobOrderData._id} ` : "newjoborder", {
      replace: true,
      state: { jobOrderData },
    });

    console.log(nestedDocuments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/");
      const responseData = response.data.message;
      setNestedDocuments(responseData);
    } catch (error) {
      console.error();
    }
  };

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
            {nestedDocuments.length === 0 ? (
              <tr>
                <td colSpan={6}>No data available</td>
              </tr>
            ) : (
              nestedDocuments.map((nestedDoc) => (
                <tr key={nestedDoc._id}>
                  <td>#JO00001</td>
                  <td>{nestedDoc.JOStatus}</td>
                  <td>{nestedDoc.PaymentStatus}</td>
                  <td>{nestedDoc.selectedDate}</td>
                  <td>{nestedDoc.jobSite}</td>
                  <td className="text-center">
                    <button onClick={() => handleModalState({ ...nestedDoc })}>
                      <FaEye />
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
