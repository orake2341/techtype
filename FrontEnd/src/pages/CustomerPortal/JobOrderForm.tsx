import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import logo from "../../assets/imgs/parallax/Sticker 3.png";
import Select from "../../components/Joborder/select";
import {
  setSelectedJobOrder,
  deleteServiceRow,
  setSiteOfService,
  setMessage,
} from "../../state/joborder/jobOrderSlice";

const initialJobOrderState = {
  _id: "",
  JOStatus: "",
  PaymentStatus: "",
  selectedDate: "",
  jobSite: "",
  services: [],
  message: "",
};

const JobOrderForm = () => {
  const navigate = useNavigate();

  const jobOrderData = useSelector((state: RootState) => state.joborder);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(jobOrderData);
  }, [jobOrderData]);

  const options = [
    { value: "", label: " --Please Select--" },
    { value: "Onsite", label: "Onsite" },
    { value: "Home", label: "Home" },
  ];

  const handleCloseOrder = () => {
    dispatch(setSelectedJobOrder(initialJobOrderState));
    navigate("../");
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setMessage(event.target.value));
  };

  const openService = (service: any | null) => {
    if (service) {
      navigate(`service/${service.id}`, {
        replace: true,
        state: { serviceData: service },
      });
    } else {
      navigate("service/newservice", { replace: true });
    }
  };

  const handleSubmit = async () => {
    try {
      if (jobOrderData._id === "") {
        const response = await axios.post(
          "http://localhost:4000/joborder/create",
          {
            services: jobOrderData.services,
            jobSite: jobOrderData.jobSite,
          }
        );
        console.log(response.data);
      } else {
        const response = await axios.put(
          "http://localhost:4000/joborder/update",
          {
            joid: jobOrderData._id,
            services: jobOrderData.services,
            jobSite: jobOrderData.jobSite,
          }
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error submitting job order:", error);
      // Handle error or show error message to the user
    }
    dispatch(setSelectedJobOrder(initialJobOrderState));
    navigate("../");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
    >
      <div className="bg-white p-6 rounded-lg w-10/12 h-5/6 flex flex-col relative">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600"
          onClick={handleCloseOrder}
        >
          <FaTimes className="text-xl" />
        </button>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold text-black-500">
            Job Order Form
          </h1>
          <figure>
            <img className="h-20" src={logo} width={150} alt="logo" />
          </figure>
        </div>
        <div className="bg-gray-200 flex-grow p-6 rounded-lg">
          <form className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <label className="text-lg font-medium mb-2 text-gray-700">
                Job Order Number:{" "}
              </label>
              <input
                type="text"
                value="JO2024-2034"
                readOnly
                className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="col-span-3">
              <Select
                label="Site of Service:"
                value={jobOrderData.jobSite}
                onChange={(selectedValue) =>
                  dispatch(setSiteOfService(selectedValue))
                }
                options={options}
              />
            </div>
            <div className="col-span-3 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                Service Details
              </h2>
              <button
                type="button"
                onClick={() => {
                  openService(null);
                }}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                <FaPlusCircle className="text-lg mr-2" />
                <span>Add Service</span>
              </button>
            </div>
            <div className="col-span-3 overflow-y-auto h-40 bg-white rounded-lg shadow-md">
              <table className="w-full border-collapse border border-gray-300 ">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">
                      Service
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobOrderData.services.length > 0 &&
                    jobOrderData.services.map((row: any) => (
                      <tr key={row.id}>
                        <td className="border border-gray-300 px-4 py-2 w-1/4">
                          {row.typeofservice}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 w-1/4">
                          <button
                            type="button"
                            onClick={() => {
                              openService(row);
                            }}
                            className="text-blue-500 hover:text-blue-700 mr-2"
                          >
                            <FaEdit />
                          </button>
                          <button
                            type="button"
                            onClick={() => dispatch(deleteServiceRow(row.id))}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-6">
            <label className="text-lg font-medium mb-2 text-gray-700">
              Message (Optional):
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 min-h-32"
              placeholder="Type your message here..."
              value={jobOrderData.message}
              onChange={handleMessageChange}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              onClick={handleCloseOrder}
            >
              Cancel
            </button>
            {jobOrderData._id === "" ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default JobOrderForm;
