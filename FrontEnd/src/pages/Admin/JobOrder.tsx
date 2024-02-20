import React, { useState } from "react";

const JobOrder = () => {
  const [jobOrders, JobOrder] = useState([
    {
      id: 1,
      joNumber: "JO001",
      name: "Job Order 1",
      typeOfService: "Service Type 1",
      siteOfService: "Site 1",
      description: "Description 1",
    },
    {
      id: 2,
      joNumber: "JO002",
      name: "Job Order 2",
      typeOfService: "Service Type 2",
      siteOfService: "Site 2",
      description: "Description 2",
    },
    {
      id: 3,
      joNumber: "JO003",
      name: "Job Order 3",
      typeOfService: "Service Type 3",
      siteOfService: "Site 3",
      description: "Description 3",
    },
  ]);

  return (
    <section className="flex flex-col h-screen">
      <h2 className="text-2xl font-bold mb-4">Job Orders</h2>
      <div className="flex-1 flex overflow-x-auto">
        <div className="mx-4 flex-1">
          <div className="shadow rounded-lg overflow-auto">
            <div className="flex justify-center">
              <table className="table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      JO Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type of Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Site of Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobOrders.map((jobOrder) => (
                    <tr key={jobOrder.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {jobOrder.joNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {jobOrder.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {jobOrder.typeOfService}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {jobOrder.siteOfService}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {jobOrder.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => jobOrder.id}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => jobOrder.id}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => jobOrder.id}
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOrder;
