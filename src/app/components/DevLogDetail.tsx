"use client";

import clsx from "clsx";
import { Post } from "../types/post";

interface Props {
  post: Post;
}

export default function DevLogPageTagName({ post }: Props) {
  const tagName = Array.isArray(post.tags) ? post.tags[0] : post.tags;

  return (
    <span
      className={clsx(
        "bg-amber-100 py-1 px-2 rounded-full text-xs",
        tagName === "React" && "bg-blue-400",
        tagName === "TypeScript" && "bg-sky-300",
        tagName === "HTML/CSS" && "bg-green-300",
        tagName === "Next.js" && "bg-amber-100"
      )}
    >
      {tagName}
    </span>
  );
}
