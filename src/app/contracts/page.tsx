"use client"

import Link from 'next/link'
import { useState } from 'react'

interface Contract {
  name: string;
  status: string;
  lastUpdated: string;
  content: string; // This would typically come from your data source
}

export default function Contracts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const sampleContract: Contract = {
    name: "Service Agreement A",
    status: "Active",
    lastUpdated: "2023-11-15",
    content: "This is the contract content. In a real application, this would be fetched from your backend."
  };

  const handleViewContract = (contract: Contract) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Contracts</h1>
        <button className="btn btn-primary">Upload Contract</button>
      </div>

      <div className="flex gap-4 mb-6">
        <input type="text" placeholder="Search contracts..." className="input input-bordered w-full max-w-xs" />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Filter by status</option>
          <option>All</option>
          <option>Active</option>
          <option>Expired</option>
          <option>Needs Review</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sampleContract.name}</td>
              <td><span className="badge badge-success">{sampleContract.status}</span></td>
              <td>{sampleContract.lastUpdated}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-sm" onClick={() => handleViewContract(sampleContract)}>View</button>
                  <button className="btn btn-sm btn-outline">Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contract View Modal */}
      <dialog id="contract_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg mb-4">
            {selectedContract?.name}
          </h3>
          <div className="mb-4">
            <span className="badge badge-success mr-2">{selectedContract?.status}</span>
            <span className="text-sm text-gray-500">Last Updated: {selectedContract?.lastUpdated}</span>
          </div>
          <div className="bg-base-200 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap">{selectedContract?.content}</pre>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </div>
  )
}
