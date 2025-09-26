"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathname = usePathname();
  // * Projects 부분으로 이동
  const handleScrollToProjects = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 1940,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-xl border-b-1 border-b-[#7F7E82] sticky top-0 z-50">
      <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8 h-18 bg-[#E9E6E1]">
        {/* 헤더바 */}
        <div className="flex place-content-between">
          {/* 이름 */}
          <div className="pl-3">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light text-[#111111]">ychwoo</span>
            </Link>
          </div>
          {/* 프로젝트 및 DevLog 버튼 */}
          <div className="pr-3 flex space-x-5">
            <button
              onClick={handleScrollToProjects}
              className="text-gray-500 text-sm hover:underline mt-2"
            >
              Projects
            </button>
            <button className="text-white bg-black px-3 text-sm rounded-xl hover:bg-gray-800">
              <Link href="/Posts">Dev Log</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
