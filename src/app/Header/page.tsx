'use client'

import Link from 'next/link'

export default function HeaderPage() {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0">
      <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8 h-18 bg-blue-900">
        {/* 헤더바 */}
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-200 group-hover:text-blue-600 transition-colors duration-300">
              ychanwoo&#39;s Blog
            </span>
          </Link>
        </div>
        
      </div>
    </header>
  )
}