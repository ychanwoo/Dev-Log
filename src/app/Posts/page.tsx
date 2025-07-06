import { Metadata } from "next";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: 'Blog-List & New-Post',
  description: 'Posts 페이지 입니다.'
}

export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white space-y-8">
      
      <h1 className="text-3xl font-bold text-blue-900">블로그 관리</h1>
      <p className="text-gray-500 text-lg">원하는 작업을 선택하세요</p>

      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
        <Button href="/Posts/List" className="bg-indigo-500 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">블로그 목록 보기</Button>
        <Button href="/Posts/New" className="bg-green-500 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">새 블로그 작성</Button>
      </div>

    </div>
  );
}
