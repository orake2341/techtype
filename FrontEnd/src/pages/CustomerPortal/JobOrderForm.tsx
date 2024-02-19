import { FaPlusCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/imgs/parallax/Sticker 3.png";

const JobOrderForm = () => {
  const { id } = useParams();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-10/12 h-5/6 flex flex-col">
        <div className="flex items-center">
          <h1 className="text-5xl font-bold flex-grow">Job Order Form</h1>
          <figure>
            <img className="h-20" src={logo} width={150} alt="logo" />
          </figure>
        </div>
        <div className="bg-gray-200 flex-grow p-6">
          <form className="flex flex-col">
            <div>
              <label>Site of Service:</label>
            </div>
            <div className="flex items-start">
              <button className="bg-CACACAC hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                <FaPlusCircle className="text-base" />
                <p className="text-base">Add</p>
              </button>
              <table className="w-full mt-4 border-collapse border border-gray-800">
                <thead>
                  <tr>
                    <th className="border border-gray-800 px-4 py-2">
                      Column 1
                    </th>
                    <th className="border border-gray-800 px-4 py-2">
                      Column 2
                    </th>
                    <th className="border border-gray-800 px-4 py-2">
                      Column 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-800 px-4 py-2">Data 1</td>
                    <td className="border border-gray-800 px-4 py-2">Data 2</td>
                    <td className="border border-gray-800 px-4 py-2">Data 3</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <div className=""></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobOrderForm;
