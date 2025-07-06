import NewBlog from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Post',
  description: '새로운 게시물을 등록하는 페이지 입니다.'
}

export default function NewPostsLayout(){
  return(
    <NewBlog />
  )
}
