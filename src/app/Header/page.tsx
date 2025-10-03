"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderPage() {
  const pathname = usePathname();
  const [isPathContainPosts, setIsPathContainPosts] = useState(false);

  // * Projects 부분으로 이동
  const handleScrollToProjects = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 1940,
        behavior: "smooth",
      });
    }
  };

  //* 경로가 /Posts로 시작할 경우
  useEffect(() => {
    if (pathname.startsWith("/posts")) {
      setIsPathContainPosts(true);
    } else {
      setIsPathContainPosts(false);
    }
  }, [pathname]);

  return (
    <>
      {/* 경로에 /post가 포함되지 않는 경우 */}
      {!isPathContainPosts && (
        <header className="bg-white shadow-xl border-b-1 border-b-[#7F7E82] sticky top-0 z-50">
          <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8 h-18 bg-[#E9E6E1]">
            {/* 헤더바 */}
            <div className="flex place-content-between">
              {/* 이름 */}
              <div className="pl-3">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-light text-[#111111]">
                    ychwoo
                  </span>
                </Link>
              </div>
              {/* 프로젝트 및 DevLog 버튼 */}
              <div className="pr-3 flex space-x-5">
                <button
                  onClick={handleScrollToProjects}
                  className="text-gray-500 text-sm hover:underline"
                >
                  Projects
                </button>
                <button className="text-white bg-black px-3 text-sm rounded-xl hover:bg-gray-800">
                  <Link href="/posts">Dev Log</Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
      {/* 경로에 /post가 포함되는 경우 */}
      {isPathContainPosts && (
        <header className="bg-white shadow-xl sticky top-0 z-50">
          <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8 h-18 bg-[#F3F3F3]">
            {/* 헤더바 */}
            <div className="flex place-content-start gap-10">
              {/* 이름 */}
              <div className="pl-3">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-light text-[#111111]">
                    Dev Log
                  </span>
                </Link>
              </div>
              {/* filter 목록 */}
              <div className="pt-1.5 space-x-5">
                <button className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-[#545454] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  All
                </button>
                <button className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-[#545454] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  HTML/CSS
                </button>
                <button className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-[#545454] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  React
                </button>
                <button className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-[#545454] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Next.js
                </button>
              </div>
              {/* 프로젝트 및 DevLog 버튼 */}
              <div className="pr-3 flex space-x-5 ml-auto">
                <button
                  disabled={true}
                  onClick={handleScrollToProjects}
                  className="text-gray-500 text-sm hover:underline"
                >
                  Projects
                </button>
                <button className="text-white bg-black px-3 text-sm rounded-xl hover:bg-gray-800">
                  <Link href="/">home</Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
