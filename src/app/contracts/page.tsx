import Link from 'next/link'

export default function Contracts() {
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
              <td>Service Agreement A</td>
              <td><span className="badge badge-success">Active</span></td>
              <td>2023-11-15</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-sm">View</button>
                  <button className="btn btn-sm btn-outline">Edit</button>
                </div>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
