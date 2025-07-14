'use client'

import Button from "@/app/components/Button";
import { Post } from "@/app/types/post";
import { getPosts } from "@/app/utils/posts";
// import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: 'Blog List',
//   description: '블로그 목록 페이지 입니다.'
// }

export default function BlogListPage(){
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  useEffect(() => {
    const posts = getPosts();
    setBlogPosts(posts);
  },[])

  // 카테고리별 필터링
  const filteredPosts = selectedCategory === 'ALL' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const categories = ['ALL', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  return(
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">블로그 목록</h1>
        <Button href="/Posts/New" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">새 글 작성</Button>
      </div>

      {/* category */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">카테고리</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rouded-lg transition-color ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-blue-100 hover:bg-gray-200'
            }`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Lists */}
      <div className="mt-8 space-y-4">
          {filteredPosts.map(post => (
            <Link href={`/Posts/List/${post.id}`} key={post.id} className="block transition-all hover:scale-[1.01] duration-200">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg">
                <div className="flex flex-col gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                  <span className="flex items-center justify-between mt-4 text-gray-500 text-sm">ychanwoo</span>
                </div>
              </div>
            </Link> 
          ))}
      </div>
    </div>
  )
}