export default function Reports() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Reports & Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Contracts</div>
            <div className="stat-value">89</div>
            <div className="stat-desc">↗︎ 12 (14%)</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Pending Reviews</div>
            <div className="stat-value text-warning">23</div>
            <div className="stat-desc">↗︎ 5 (28%)</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Updated This Month</div>
            <div className="stat-value text-success">45</div>
            <div className="stat-desc">↘︎ 2 (4%)</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Compliance Score</div>
            <div className="stat-value text-info">92%</div>
            <div className="stat-desc">↗︎ 3%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Recent Activity</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023-11-15</td>
                    <td>Contract Update</td>
                    <td><span className="badge badge-success">Completed</span></td>
                  </tr>
                  <tr>
                    <td>2023-11-14</td>
                    <td>Regulation Review</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compliance Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>GDPR Compliance</span>
                  <span className="text-success">95%</span>
                </div>
                <progress className="progress progress-success" value="95" max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>CCPA Compliance</span>
                  <span className="text-warning">85%</span>
                </div>
                <progress className="progress progress-warning" value="85" max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>HIPAA Compliance</span>
                  <span className="text-error">70%</span>
                </div>
                <progress className="progress progress-error" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
