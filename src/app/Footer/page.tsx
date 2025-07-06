import Image from "next/image"
import Link from "next/link"

export default function FooterPage(){
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-700 font-medium mb-2">© 2025 ychanwoo. All rights reserved.</p>
        <p className="text-gray-600 mb-4">Contact: <a href="mailto:chxan02@naver.com" className="text-blue-600 hover:underline">chxan02@naver.com</a></p>
        <div className="mb-4 flex justify-center items-center">
          <Link href="https://github.com/ychanwoo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <Image src='/github.png' alt="github image" width={20} height={20} className="mr-1" />
            <span className="text-gray-700 hover:text-gray-900">GitHub</span>
          </Link>
        </div>
        <p className="text-gray-600 text-sm">A blog about Frontend Development and daily life.</p>
      </div>
    </footer>
  )
}