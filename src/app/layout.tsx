import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'ARA - Automated Regulation Analyzer',
  description: 'Manage and analyze contracts for regulatory compliance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="navbar bg-base-100 lg:hidden">
              <div className="flex-none">
                <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <Link href="/" className="text-xl font-bold">ARA</Link>
              </div>
            </div>
            {children}
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <div className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
              <div className="hidden lg:block mb-8">
                <Link href="/" className="text-2xl font-bold">ARA</Link>
              </div>
              <ul className="menu menu-lg">
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/contracts">Contracts</Link></li>
                <li><Link href="/regulations">Regulations</Link></li>
                <li><Link href="/reports">Reports</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
