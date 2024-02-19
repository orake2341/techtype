import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/imgs/parallax/Sticker 3.png";

const JobOrderForm = () => {
  const {id} = useParams();
  const [rows, setRows] = useState([
    { id: 1, data1: "Data 1", data2: "Data 2", data3: "Data 3" }
  ]);

  const [siteOfService, setSiteOfService] = useState("");
  const [showModal, setShowModal] = useState(true);

  const generateJO = () => {
  
    return `JO${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleSiteOfServiceChange = () => {
    setSiteOfService(e.target.value);
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      data1: "New Data 1",
      data2: "New Data 2",
      data3: "New Data 3"
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${showModal ? "" : "hidden"}`}>
      <div className="bg-white p-6 rounded-lg w-10/12 h-5/6 flex flex-col relative">
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600" onClick={handleCloseModal}>
          <FaTimes className="text-xl" />
        </button>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold text-black-500">Job Order Form</h1>
          <figure>
            <img className="h-20" src={logo} width={150} alt="logo" />
          </figure>
        </div>
        <div className="bg-gray-200 flex-grow p-6 rounded-lg">
          <form className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <label className="text-lg font-medium mb-2 text-gray-700">Job Order Number: </label>
              <input
                type="text"
                value={generateJO()}
                readOnly
                className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="col-span-3">
              <label className="text-lg font-medium mb-2 text-gray-700">Site of Service: </label>
              <select
                value={siteOfService}
                onChange={handleSiteOfServiceChange}
                className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select Service</option>
                <option value="site1">Site 1</option>
                <option value="site2">Site 2</option>
                <option value="site3">Site 3</option>
              </select>
            </div>
            <div className="col-span-3 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">Service Details</h2>
              <button
                type="button"
                onClick={addRow}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                <FaPlusCircle className="text-lg mr-2" />
                <span>Add Service</span>
              </button>
            </div>
            <div className="col-span-3 overflow-y-auto max-h-64 bg-white rounded-lg shadow-md">
              <table className="w-full border-collapse border border-gray-300 table-fixed">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">Column 1</th>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">Column 2</th>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">Column 3</th>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">{row.data1}</td>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">{row.data2}</td>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">{row.data3}</td>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">
                        <button
                          type="button"
                          onClick={() => {/* Add edit functionality */}}
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
            <label className="text-lg font-medium mb-2 text-gray-700">Message (Optional):</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 min-h-32"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOrderForm;
