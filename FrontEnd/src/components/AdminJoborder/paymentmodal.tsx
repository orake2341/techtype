import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../state/store";

import { useDropzone } from "react-dropzone";
import axios from "axios";

const PaymentModal = () => {
  const location = useLocation();
  const joid = location.state.joid;
  const paymentStatus = location.state.paymentStatus;
  const navigate = useNavigate();
  const paymentDetails = useSelector(
    (state: RootState) => state.paymentdetails
  );

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const handelpay = async () => {
    try {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const userInfoString = localStorage.getItem("userInfo") || "";
          const userInfo = JSON.parse(userInfoString);
          const userId = userInfo._id;
          const response = await axios.put(
            "http://localhost:4000/payment/pay",
            {
              userid: userId,
              joid: joid,
              picture: reader.result,
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error submitting job order:", error);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error handling payment:", error);
    }
    navigate("../");
  };

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
          <h2 className="text-3xl font-bold">Invoice</h2>
        </div>
        {paymentDetails.isSet && paymentStatus !== "Full Paid" ? (
          <>
            <div className="overflow-y-scroll flex flex-col max-h-px-400  bg-gray-300 mb-4 rounded-3xl p-8">
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
                            readOnly
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
                              readOnly
                            />
                          </div>
                        )}
                        {service.subtype.keycapcleaning === true && (
                          <div className="pl-28 flex justify-between gap-10 mb-4">
                            <h4>KeyCapCleaning</h4>
                            <input
                              value={service.subtype?.keycapcleaningprice || ""}
                              type="number"
                              readOnly
                            />
                          </div>
                        )}
                        {service.subtype.switchlubing === true && (
                          <div className="pl-28 flex justify-between gap-10 mb-4">
                            <h4>Switch Lubing</h4>
                            <input
                              value={service.subtype?.switchlubingprice || ""}
                              type="number"
                              readOnly
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
                            readOnly
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
                            readOnly
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                ))}
            </div>

            <div className="flex justify-between ">
              <h4>Service fee</h4>
              <input
                value={paymentDetails.ServiceFee || ""}
                type="number"
                readOnly
              />
            </div>
            <div className="flex justify-between ">
              <h4>Balance</h4>
              <input
                value={paymentDetails.Balance || ""}
                type="number"
                readOnly
              />
            </div>

            <div className="flex justify-between mb-8">
              <h4>Total Payment</h4>
              <p>{paymentDetails.TotalPayment}</p>
            </div>
            <div className="mb-5">
              <div>Payment Screenshot</div>
              <div
                {...getRootProps()}
                className="border-2 border-dashed p-8 text-center cursor-pointer"
              >
                <input {...getInputProps()} className="h-40" />
                <img
                  src={preview as string}
                  alt="Upload preview"
                  className="max-w-full max-h-px-200 mx-4 block"
                />
              </div>
            </div>

            <button
              className="self-end items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handelpay}
            >
              Send
            </button>
          </>
        ) : paymentStatus !== "Full Paid" ? (
          <div>Not yet</div>
        ) : (
          <div>Fully Paid</div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
