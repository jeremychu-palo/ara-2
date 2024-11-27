import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Contract Management Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Contract Management</h2>
            <p>Upload, analyze, and manage your contracts</p>
            <div className="card-actions justify-end">
              <Link href="/contracts" className="btn btn-primary">View Contracts</Link>
            </div>
          </div>
        </div>

        {/* Regulations Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Regulations</h2>
            <p>Stay up to date with the latest regulations</p>
            <div className="card-actions justify-end">
              <Link href="/regulations" className="btn btn-primary">View Regulations</Link>
            </div>
          </div>
        </div>

        {/* Reports Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Reports & Analytics</h2>
            <p>View insights and analytics</p>
            <div className="card-actions justify-end">
              <Link href="/reports" className="btn btn-primary">View Reports</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
