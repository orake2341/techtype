import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/imgs/parallax/Sticker 3.png";
import Modal from "../../components/Joborder/servicemodal";
import Select from "../../components/Joborder/select";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";

const JobOrderForm = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const jobOrderData = useSelector((state: RootState) => state.joborder);
  const dispatch = useDispatch<AppDispatch>();
  const [modalState, setModalState] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  const [siteOfService, setSiteOfService] = useState(
    Location.state.jobOrderData.jobSite
  );
  const [message, setMessage] = useState("");

  const options = [
    { value: "", label: " --Please Select--" },
    { value: "Onsite", label: "Onsite" },
    { value: "Home", label: "Home" },
  ];

  const handleCloseOrder = () => {
    navigate(-1);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleModalState = () => {
    setModalState(!modalState);
  };

  /*   const addRow = (newRow: any) => {
    const newId =
      servicerows.length > 0 ? servicerows[servicerows.length - 1].id + 1 : 1;
    newRow.id = newId;
    setServiceRows([...servicerows, newRow]);
  };

  const editRow = (id: number, newData: any) => {
    const updatedRows = servicerows.map((row: any) =>
      row.id === id ? newData : row
    );
    setServiceRows(updatedRows);
    setModalState(false);
  };

  const deleteRow = (id: number) => {
    const updatedRows = servicerows.filter((row: any) => row.id !== id);
    setServiceRows(updatedRows);
  }; */

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
    >
      <div className="bg-white p-6 rounded-lg w-10/12 h-5/6 flex flex-col relative">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600"
          onClick={() => navigate(-1)}
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
              {/* <label className="text-lg font-medium mb-2 text-gray-700">
                Site of Service:{" "}
              </label>
              
              <select
                value={siteOfService}
                onChange={handleSiteOfServiceChange}
                className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select Service</option>
                <option value="site1">Site 1</option>
                <option value="site2">Site 2</option>
                <option value="site3">Site 3</option>
              </select> */}
              <Select
                label="Site of Service:"
                value={siteOfService}
                onChange={setSiteOfService}
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
                  setSelectedRowId(null);
                  handleModalState();
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
                  {servicerows.length > 0 &&
                    servicerows.map((row: any) => (
                      <tr key={row.id}>
                        <td className="border border-gray-300 px-4 py-2 w-1/4">
                          {row.typeofservice}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 w-1/4">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedRowId(row.id);
                              handleModalState();
                            }}
                            className="text-blue-500 hover:text-blue-700 mr-2"
                          >
                            <FaEdit />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteRow(row.id)}
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
              value={message}
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
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => {
                // edit
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {/* <Modal
        isOpen={modalState}
        onClose={handleModalState}
        addRow={addRow}
        editRow={editRow}
        serviceData={
          selectedRowId
            ? servicerows.find((row: any) => row.id === selectedRowId)
            : null
        }
      /> */}
    </div>
  );
};

export default JobOrderForm;
