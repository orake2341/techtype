import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/parallax/Sticker 3.png";
import Select from "../../components/Joborder/select";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import {
  setSelectedJobOrder,
  deleteServiceRow,
  setSiteOfService,
  setMessage,
} from "../../state/joborder/jobOrderSlice";
import axios from "axios";
import {
  updateServiceProperty,
  updateBalance,
} from "../../state/paymentdetails/paymentDetailsSilce";

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
  const location = useLocation();
  const navigate = useNavigate();

  const userid = location.state;

  const jobOrderData = useSelector((state: RootState) => state.joborder);
  const paymentDetails = useSelector(
    (state: RootState) => state.paymentdetails
  );
  const dispatch = useDispatch<AppDispatch>();

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

  const handleInputChange = (
    serviceId: string,
    property: string,
    value: string
  ) => {
    const numericValue = parseFloat(value);
    // Check if the parsed value is NaN
    if (!isNaN(numericValue)) {
      // Dispatch action with the numeric value
      dispatch(
        updateServiceProperty({ serviceId, property, value: numericValue })
      );
    } else {
      // Dispatch action with a fallback value (e.g., 0)
      dispatch(updateServiceProperty({ serviceId, property, value: 0 }));
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(userid);
      if (jobOrderData._id === "") {
        const response = await axios.post(
          "http://localhost:4000/joborder/create",
          {
            _id: userid,
            services: jobOrderData.services,
            jobSite: jobOrderData.jobSite,
            message: jobOrderData.message,
          }
        );
        console.log(response.data);
      } else {
        console.log();
        const response = await axios.put(
          "http://localhost:4000/joborder/update",
          {
            joid: jobOrderData._id,
            _id: userid,
            services: jobOrderData.services,
            jobSite: jobOrderData.jobSite,
            message: jobOrderData.message,
          }
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error submitting job order:", error);
    }
    dispatch(setSelectedJobOrder(initialJobOrderState));
    navigate("../");
  };

  const handleSet = async () => {
    try {
      console.log(paymentDetails.TotalPayment);
      const response = await axios.put("http://localhost:4000/payment/set", {
        userid: userid,
        joid: jobOrderData._id,
        paymentdetails: paymentDetails,
        totalPayment: paymentDetails.TotalPayment,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting job order:", error);
    }
    navigate("../");
  };

  const handlePaymentPic = (picture: any) => {
    if (picture) {
      navigate(`paymentscreenshot`, {
        replace: true,
        state: {
          picture,
          jobOrderId: jobOrderData._id,
          userId: userid,
          jostate: jobOrderData.JOStatus,
        },
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
    >
      <div className="bg-white p-6 rounded-lg w-10/12 max-w-px-1300 min-w-px-1300 flex relative justify-between">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600"
          onClick={handleCloseOrder}
        >
          <FaTimes className="text-xl" />
        </button>
        <div className="flex-col">
          <div className="flex items-center justify-between ">
            <figure>
              <img className="h-20" src={logo} width={150} alt="logo" />
            </figure>
          </div>
          <div className="bg-gray-200 flex-grow p-6 rounded-lg h-auto">
            <form className="grid grid-cols-3 gap-6">
              <h2 className="text-3xl font-bold">JobOrder</h2>
              <div className="col-span-3">
                <label className="text-lg font-medium mb-2 text-gray-700">
                  Job Order Number:
                </label>
                <input
                  type="text"
                  value={jobOrderData._id}
                  readOnly
                  className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="col-span-3">
                <Select
                  isforForm={true}
                  label="Site of Service:"
                  value={jobOrderData.jobSite}
                  onChange={(selectedValue) =>
                    dispatch(setSiteOfService(selectedValue))
                  }
                  options={options}
                  readonly={jobOrderData.JOStatus !== "Pending"}
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
                  disabled={jobOrderData.JOStatus !== "Pending"}
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
                              disabled={jobOrderData.JOStatus !== "Pending"}
                            >
                              <FaEdit />
                            </button>
                            <button
                              type="button"
                              onClick={() => dispatch(deleteServiceRow(row.id))}
                              className="text-red-500 hover:text-red-700"
                              disabled={jobOrderData.JOStatus !== "Pending"}
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
                readOnly={jobOrderData.JOStatus !== "Pending"}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
                onClick={handleCloseOrder}
                disabled={jobOrderData.JOStatus !== "Pending"}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => console.log(paymentDetails.TotalPayment)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="h-20"></div>
          <div className="bg-gray-200 flex-grow p-6 rounded-lg h-90">
            <div className="flex flex-col">
              <div className="mb-12">
                <h2 className="text-3xl font-bold">Invoice</h2>
              </div>
              <div className="overflow-y-scroll flex flex-col max-h-px-400 min-h-px-400 bg-gray-300 mb-4 rounded-3xl p-8">
                {paymentDetails.services.length > 0 &&
                  paymentDetails.services.map((service: any) => (
                    <div className="" key={service._id}>
                      {service.servicetype === "Keyboard Modding" ? (
                        <>
                          <h3>{service.servicetype}</h3>
                          <div className="pl-28 flex justify-between gap-10 mb-4">
                            <h4>{service.subtype.typeofkeyboardmods}</h4>
                            <input
                              value={
                                service.subtype?.typeofkeyboardmodsprice || ""
                              }
                              type="number"
                              onChange={(e) => {
                                handleInputChange(
                                  service._id,
                                  "typeofkeyboardmodsprice",
                                  e.target.value
                                );
                              }}
                              readOnly={jobOrderData.JOStatus !== "Pending"}
                            />
                          </div>
                          {service.subtype.keyboarddeepclean === true && (
                            <div className="pl-28 flex justify-between gap-10 mb-4">
                              <h4>KeyboardDeepClean</h4>
                              <input
                                value={
                                  service.subtype?.keyboarddeepcleanprice || ""
                                }
                                type="number"
                                onChange={(e) => {
                                  handleInputChange(
                                    service._id,
                                    "keyboarddeepcleanprice",
                                    e.target.value
                                  );
                                }}
                                readOnly={jobOrderData.JOStatus !== "Pending"}
                              />
                            </div>
                          )}
                          {service.subtype.keycapcleaning === true && (
                            <div className="pl-28 flex justify-between gap-10 mb-4">
                              <h4>KeyCapCleaning</h4>
                              <input
                                value={
                                  service.subtype?.keycapcleaningprice || ""
                                }
                                type="number"
                                onChange={(e) => {
                                  handleInputChange(
                                    service._id,
                                    "keycapcleaningprice",
                                    e.target.value
                                  );
                                }}
                                readOnly={jobOrderData.JOStatus !== "Pending"}
                              />
                            </div>
                          )}
                          {service.subtype.switchlubing === true && (
                            <div className="pl-28 flex justify-between gap-10 mb-4">
                              <h4>Switch Lubing</h4>
                              <input
                                value={service.subtype?.switchlubingprice || ""}
                                type="number"
                                onChange={(e) => {
                                  handleInputChange(
                                    service._id,
                                    "switchlubingprice",
                                    e.target.value
                                  );
                                }}
                                readOnly={jobOrderData.JOStatus !== "Pending"}
                              />
                            </div>
                          )}
                        </>
                      ) : service.servicetype === "PC Cleaning" ? (
                        <>
                          <h3>{service.servicetype}</h3>
                          <div className="pl-28 flex justify-between gap-10 mb-4">
                            <h4>PC Cleaning</h4>
                            <input
                              value={service.subtype?.pccleaningprice || ""}
                              type="number"
                              onChange={(e) => {
                                handleInputChange(
                                  service._id,
                                  "pccleaningprice",
                                  e.target.value
                                );
                              }}
                              readOnly={jobOrderData.JOStatus !== "Pending"}
                            />
                          </div>
                        </>
                      ) : service.servicetype === "PC Building" ? (
                        <>
                          <h3>{service.servicetype}</h3>
                          <div className="pl-28 flex justify-between gap-10 mb-4">
                            <h4>PC Building</h4>
                            <input
                              value={service.subtype?.pcbuildingprice || ""}
                              type="number"
                              onChange={(e) => {
                                handleInputChange(
                                  service._id,
                                  "pcbuildingprice",
                                  e.target.value
                                );
                              }}
                              readOnly={jobOrderData.JOStatus !== "Pending"}
                            />
                          </div>
                        </>
                      ) : null}
                    </div>
                  ))}
              </div>

              <div className="flex justify-between mb-8">
                <h4>Service fee</h4>
                <input
                  value={paymentDetails.ServiceFee || ""}
                  type="number"
                  onChange={(e) => {
                    handleInputChange("", "ServiceFee", e.target.value);
                  }}
                  readOnly={jobOrderData.JOStatus !== "Pending"}
                />
              </div>

              <div className="flex justify-between mb-8">
                <h4>Total Payment</h4>
                <p>{paymentDetails.TotalPayment}</p>
              </div>
              <div className="flex justify-end gap-8">
                <button
                  className=" items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => handleSet()}
                  disabled={jobOrderData.JOStatus !== "Pending"}
                >
                  Set
                </button>
                <button
                  className="items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => {
                    console.log(paymentDetails.paymentScreenshots);
                    const confirmedScreenshot =
                      paymentDetails.paymentScreenshots.find(
                        (screenshot: any) => screenshot.isConfirm == false
                      );
                    if (confirmedScreenshot) {
                      handlePaymentPic(confirmedScreenshot);
                    }
                  }}
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default JobOrderForm;
