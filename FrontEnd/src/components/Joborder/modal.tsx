import { useState, useEffect } from "react";
import Select from "./select";
import KeyboardModdingForm from "./keyboardmoddingform";
import PCCleaningForm from "./pccleaningform";
import PCBuildingForm from "./pcbuildingform";

type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  addRow: ({}) => void;
  serviceData: any;
  editRow: (id: number, newData: any) => void;
};

type KeyboardModdingData = {
  id: string;
  typeofservice: string;
  typeofkeyboardmods: string;
  keyboarddeepclean: boolean;
  keycapcleaning: boolean;
  switchlubing: boolean;
  description: string;
};

type PCCleaningData = {
  id: string;
  typeofservice: string;
  cleaningMethod: string;
  description: string;
};

type PCBuildingData = {
  id: string;
  typeofservice: string;
  processor: string;
  graphicsCard: string;
  description: string;
};

const Modal = ({
  isOpen,
  onClose,
  addRow,
  serviceData,
  editRow,
}: ModalProp) => {
  const [servicetype, setServiceTypeValue] = useState("");

  const [keyboardModdingData, setKeyboardModdingData] =
    useState<KeyboardModdingData>({
      id: "",
      typeofservice: "Keyboard Modding",
      typeofkeyboardmods: "",
      keyboarddeepclean: false,
      keycapcleaning: false,
      switchlubing: false,
      description: "",
    });
  const [pcCleaningData, setPCCleaningData] = useState<PCCleaningData>({
    id: "",
    typeofservice: "PC Cleaning",
    cleaningMethod: "",
    description: "",
  });
  const [pcBuildingData, setPCBuildingData] = useState<PCBuildingData>({
    id: "",
    typeofservice: "PC Building",
    processor: "",
    graphicsCard: "",
    description: "",
  });

  useEffect(() => {
    if (serviceData !== null) {
      if (serviceData.typeofservice === "Keyboard Modding") {
        setServiceTypeValue("Keyboard Modding");
        setKeyboardModdingData({
          id: serviceData.id,
          typeofservice: serviceData.typeofservice,
          typeofkeyboardmods: serviceData.typeofkeyboardmods,
          keyboarddeepclean: serviceData.keyboarddeepclean,
          keycapcleaning: serviceData.keycapcleaning,
          switchlubing: serviceData.switchlubing,
          description: serviceData.description,
        });
      } else if (serviceData.typeofservice === "PC Cleaning") {
        setServiceTypeValue("PC Cleaning");
        setPCCleaningData({
          id: serviceData.id,
          typeofservice: serviceData.typeofservice,
          cleaningMethod: serviceData.cleaningMethod,
          description: serviceData.description,
        });
      } else if (serviceData.typeofservice === "PC Building") {
        setServiceTypeValue("PC Building");
        setPCBuildingData({
          id: serviceData.id,
          typeofservice: serviceData.typeofservice,
          processor: serviceData.processor,
          graphicsCard: serviceData.graphicsCard,
          description: serviceData.description,
        });
      }
    }

    if (!isOpen) {
      setServiceTypeValue("");
      setKeyboardModdingData({
        id: "",
        typeofservice: "Keyboard Modding",
        typeofkeyboardmods: "",
        keyboarddeepclean: false,
        keycapcleaning: false,
        switchlubing: false,
        description: "",
      });
      setPCCleaningData({
        id: "",
        typeofservice: "PC Cleaning",
        cleaningMethod: "",
        description: "",
      });
      setPCBuildingData({
        id: "",
        typeofservice: "PC Building",
        processor: "",
        graphicsCard: "",
        description: "",
      });
    }
  }, [isOpen]);

  const options = [
    { value: "", label: " --Please Select--" },
    { value: "Keyboard Modding", label: "Keyboard Modding" },
    { value: "PC Cleaning", label: "PC Cleaning" },
    { value: "PC Building", label: "PC Building" },
  ];

  const addEventHandler = () => {
    addRow(keyboardModdingData);
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
    }
    onClose();
  };

  const editEventHandler = (id: number, newData: any) => {
    editRow(id, newData);
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
                <PCCleaningForm
                  data={pcCleaningData}
                  setData={setPCCleaningData}
                />
              ) : servicetype === "PC Building" ? (
                <PCBuildingForm
                  data={pcBuildingData}
                  setData={setPCBuildingData}
                />
              ) : null}
              <button
                type="button"
                className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full "
                onClick={() => {
                  if (serviceData === null) {
                    addEventHandler();
                  } else {
                    if (servicetype === "Keyboard Modding")
                      editEventHandler(serviceData.id, keyboardModdingData);
                    else if (servicetype === "PC Cleaning") {
                      editEventHandler(serviceData.id, pcCleaningData);
                    } else {
                      editEventHandler(serviceData.id, pcBuildingData);
                    }
                  }
                }}
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
