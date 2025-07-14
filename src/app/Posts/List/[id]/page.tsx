'use client'

import Button from "@/app/components/Button";
import { Post } from "@/app/types/post";
import { deletePost, getPosts } from "@/app/utils/posts";
// import { Metadata } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// export async function generateMetadata({params}: {params: {id: string}}): Promise<Metadata> {
//   const data = {
//     title: `${params.id}번 블로그`,
//     content: '게시판 이용 수칙입니다.'
//   };

//   return {
//     title: data.title,
//     description: data.content,
//   };
// }


export default function PostInfo() {
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams();
  const postId = Number(params.id);

  const handleDeletePost = () => {
    const posts = getPosts();
    const delpost = posts.find(delId => delId.id === postId);
    if (delpost) {
      deletePost(delpost.id);
    }
    alert(`[${post?.title}] 글이 삭제되었습니다.`)
  }
  
  useEffect(() => {
    const posts = getPosts();
    const findPost = posts.find(pId => pId.id === postId);
    setPost(findPost || null);
  }, [postId])

  if(!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center mt-40">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">해당 포스트를 찾을 수 없습니다.</h1>
        <Link href='/Posts/List' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
          돌아가기
        </Link>
      </div>
    )
  }
  return(
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <article>
        <div className="mb-8">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</p>
            <span className="text-gray-700 mt-6 flex items-center">작성자: ychanwoo</span>
          </div>
        </div>
        
        <div className="mt-8">
          <Button href="/Posts/List" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
            목록으로 돌아가기
          </Button>
          <Button href="/Posts/List" className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg mx-5">
            수정
          </Button>
          <Button href="/Posts/List" className="bg-red-300 hover:bg-red-400 text-gray-800 px-4 py-2 rounded-lg" onClick={handleDeletePost}>
            삭제
          </Button>
        </div>
      </article>
    </div>
  )
}
