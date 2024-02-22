import { useState, useEffect } from "react";
import Select from "./select";
import KeyboardModdingForm from "./keyboardmoddingform";
import PCCleaningForm from "./pccleaningform";
import PCBuildingForm from "./pcbuildingform";

type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  addRow: ([]) => void;
};

type KeyboardModdingData = {
  id: number;
  typeofservice: string;
  typeofkeyboardmods: string;
  keyboarddeepclean: boolean;
  keycapcleaning: boolean;
  switchlubing: boolean;
  description: string;
};

type PCCleaningData = {
  id: number;
  typeofservice: string;
  cleaningMethod: string;
};

type PCBuildingData = {
  id: number;
  typeofservice: string;
  processorType: string;
  graphicsCardType: string;
};

const Modal = ({ isOpen, onClose, addRow }: ModalProp) => {
  const [servicetype, setServiceTypeValue] = useState("");

  const [keyboardModdingData, setKeyboardModdingData] =
    useState<KeyboardModdingData>({
      id: 0,
      typeofservice: "Keyboard Modding",
      typeofkeyboardmods: "",
      keyboarddeepclean: false,
      keycapcleaning: false,
      switchlubing: false,
      description: "",
    });
  const [pcCleaningData, setPCCleaningData] = useState<PCCleaningData>({
    id: 0,
    typeofservice: "PC Cleaning",
    cleaningMethod: "",
  });
  const [pcBuildingData, setPCBuildingData] = useState<PCBuildingData>({
    id: 0,
    typeofservice: "PC Building",
    processorType: "",
    graphicsCardType: "",
  });

  const options = [
    { value: "", label: " --Please Select--" },
    { value: "Keyboard Modding", label: "Keyboard Modding" },
    { value: "PC Cleaning", label: "PC Cleaning" },
    { value: "PC Building", label: "PC Building" },
  ];

  const buttonHandle = () => {
    switch (servicetype) {
      case "Keyboard Modding":
        addRow(keyboardModdingData);
        break;
      case "PC Cleaning":
        addRow(pcCleaningData);
        break;
      case "PC Building":
        addRow(pcBuildingData);
        break;
      default:
      // Handle default case if needed
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
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
            <form className=" flex  flex-col mt-4 gap-8">
              <h1 className="text-center text-4xl font-bold">Service</h1>
              <Select
                label="Type of Service:"
                value={servicetype}
                onChange={setServiceTypeValue}
                options={options}
              />
              {servicetype === "Keyboard Modding" ? (
                <KeyboardModdingForm
                  data={keyboardModdingData}
                  setData={setKeyboardModdingData}
                />
              ) : servicetype === "PC Cleaning" ? (
                <PCCleaningForm servicetype={servicetype} />
              ) : servicetype === "PC Building" ? (
                <PCBuildingForm servicetype={servicetype} />
              ) : null}
              <button
                className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full "
                onClick={buttonHandle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
