import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

export default async function DevLogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/app/posts/posts-data",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // frontmatter 분리
  const { data, content } = matter(fileContent);

  // mdx 변환
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm], // table
        rehypePlugins: [rehypePrism], // 코드에 color 적용
      },
    },
    components: {}, // tag 커스터마이징
  });

  return (
    <div className="bg-[#F3F3F3]">
      <article className="prose mx-auto py-20">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        {mdxContent}
      </article>
    </div>
  );
}
