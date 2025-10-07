import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import DevLogPageTagName from "../components/DevLogDetail";
import { Post } from "../types/post";
import Pagination from "../components/Pagination";

export default async function DevLogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 9; // 한 페이지당 게시물 개수

  // Posts 폴더 경로
  const postDir = path.join(process.cwd(), "src/app/posts/posts-data");

  // mdx 파일 리스트 읽기
  const files = fs.readdirSync(postDir).filter((file) => file.endsWith(".mdx"));

  // 파일 별로 fromtmatter 작성
  const allPosts: Post[] = files.map((filename) => {
    const filePath = path.join(postDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    } as Post;
  });

  // * 작성일 기준으로 정렬 (내림차순)
  allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // * filter 기능
  const selectedTag = params.tag;
  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags?.includes(selectedTag))
    : allPosts;

  //* pagination (필터링된 결과에 적용)
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-15">
      {/* 한 페이지에 3x3 9개 씩 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-12">
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
      <Pagination currentPage={currentPage} totalPage={totalPages} />
    </div>
  );
}
