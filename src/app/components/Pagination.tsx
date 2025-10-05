"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
}

export default function Pagination({
  currentPage,
  totalPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString()); // 기존 쿼리에서 page 값만 변경
    return `${pathname}?${params.toString()}`; // 객체를 문자열로 변환
  };

  if (totalPage <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {/* 이전 페이지 버튼 */}
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`px-4 py-2 rounded-md transition-colors ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
        }`}
      >
        Prev
      </Link>

      {/* 현재 & 전체 페이지 표시 */}
      <span className="px-4 py-2 text-gray-600">
        {currentPage} / {totalPage}
      </span>

      {/* 다음 페이지 버튼 */}
      <Link
        href={createPageUrl(currentPage + 1)}
        className={`px-4 py-2 rounded-md transition-colors ${
          currentPage === totalPage
            ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
