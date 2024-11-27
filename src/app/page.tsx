import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl">
          <div className="lg:w-1/2">
            <img 
              src="/hero-image.svg" 
              className="max-w-sm rounded-lg shadow-2xl" 
              alt="ARA Hero"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Automated Regulation Analyzer</h1>
            <p className="py-6 text-xl">
              Streamline your contract management and ensure regulatory compliance with AI-powered analysis.
            </p>
            <Link href="/dashboard" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ARA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Smart Contract Analysis</h3>
                <p>AI-powered analysis to identify potential contradictions and compliance issues in your contracts.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Regulatory Compliance</h3>
                <p>Stay up-to-date with changing regulations and automatically analyze their impact on your contracts.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Efficient Management</h3>
                <p>Streamlined contract management with powerful search, filtering, and organization tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-base-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join organizations that trust ARA for their contract management needs.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard" className="btn btn-primary">Try ARA Now</Link>
              <Link href="#" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
