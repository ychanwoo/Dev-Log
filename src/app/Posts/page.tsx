import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import DevLogPageTagName from "../components/DevLogDetail";
import { Post } from "../types/post";
// 필터링 기능도 추가
// 페이지네이션 기능 추가

export default function DevLogPage() {
  // Posts 폴더 경로
  const postDir = path.join(process.cwd(), "src/app/posts/posts-data");

  // mdx 파일 리스트 읽기
  const files = fs.readdirSync(postDir).filter((file) => file.endsWith(".mdx"));

  // 파일 별로 fromtmatter 작성
  const posts: Post[] = files.map((filename) => {
    const filePath = path.join(postDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    } as Post;
  });

  return (
    <div className="container mx-auto px-4 py-15">
      {/* 한 페이지에 3x4 12개 씩 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${(post as Post).slug}`} className="">
              <div className="relative h-55">
                <Image
                  src={(post as Post).image}
                  alt={`${(post as Post).title} Log thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {(post as Post).title}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {(post as Post).date}
                  </span>
                  <DevLogPageTagName post={post} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
