export default function Regulations() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Regulations</h1>
        <button className="btn btn-primary">Add Regulation</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Regulation Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">GDPR Update 2024</h2>
              <span className="badge badge-primary">New</span>
            </div>
            <p className="text-sm text-gray-600">Effective Date: Jan 1, 2024</p>
            <p className="mt-4">Updated privacy requirements for data processing and storage in the EU region.</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-sm">View Details</button>
              <button className="btn btn-sm btn-outline">Impact Analysis</button>
            </div>
          </div>
        </div>

        {/* Another Regulation Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">CCPA Amendment</h2>
              <span className="badge badge-secondary">Updated</span>
            </div>
            <p className="text-sm text-gray-600">Effective Date: Dec 1, 2023</p>
            <p className="mt-4">California Consumer Privacy Act amendments regarding data deletion requests.</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-sm">View Details</button>
              <button className="btn btn-sm btn-outline">Impact Analysis</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
