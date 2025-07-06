import Button from "@/app/components/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Blog List',
  description: '블로그 목록 페이지 입니다.'
}

export default function BlogListPage(){
  const blogPosts = [
    {
      id: 1,
      title: "Next.js로 블로그 구축하기",
      excerpt: "Next.js의 App Router를 활용하여 SEO 친화적인 블로그를 만드는 방법을 알아봅니다.",
      category: "Next.js",
      date: "2025-07-03",
      author: "ychanwoo",
      readTime: "5분"
    },
    {
      id: 2,
      title: "TypeScript 타입 시스템 완벽 가이드",
      excerpt: "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅니다.",
      category: "TypeScript",
      date: "2025-06-28",
      author: "ychanwoo",
      readTime: "8분"
    },
    {
      id: 3,
      title: "React 성능 최적화 기법",
      excerpt: "React 애플리케이션에서 발생할 수 있는 성능 병목 현상을 해결하고 렌더링 성능을 향상시키는 방법을 알아봅니다.",
      category: "React",
      date: "2025-06-20",
      author: "ychanwoo",
      readTime: "6분"
    },
    {
      id: 4,
      title: "CSS Grid 레이아웃 마스터하기",
      excerpt: "모던 웹 레이아웃을 위한 CSS Grid의 모든 것. 복잡한 레이아웃도 간단하게 구현해봅시다.",
      category: "HTML/CSS",
      date: "2025-06-15",
      author: "ychanwoo",
      readTime: "4분"
    }
  ];
  return(
    <>
      <h1>Blog Lists</h1>
      {/* New Post Button */}
      <div>
        <Button href="/Posts/New">새 글 작성</Button>
      </div>

      {/* category */}
      <div>
        <h2>Category</h2>
        <div>
          <button>ALL</button>
          <button>HTML/CSS</button>
          <button>TypeScript</button>
          <button>React</button>
          <button>Next.js</button>
        </div>
      </div>

      {/* Blog Lists */}
      <div>
          {blogPosts.map(post => (
            <Link href={`/Posts/List`} key={post.id}>
              <div>
                <span>{post.category}</span>
                <span>{post.title}</span>
              </div>
            </Link> 
          ))}
      </div>
    </>
  )
}