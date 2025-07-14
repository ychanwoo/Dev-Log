'use client'

import { initialPosts, Post } from "../types/post";

// 로컬 스토리지에서 포스트 가져오기
export const getPosts = (): Post[] => {
  // 서버사이드에서는 초기 데이터 반환
  if (typeof window === 'undefined') return initialPosts; // 1. 서버 사이드 렌더링 처리(초기 데이터 반환)
  
  const savedPosts = localStorage.getItem('blog_posts'); // 2. 로컬 스토리지에서 데이터 가져오기
  if (!savedPosts) {
    // 3. 데이터가 없으면 초기 데이터 반환
    localStorage.setItem('blog_posts', JSON.stringify(initialPosts));
    return initialPosts;
  }
  
  return JSON.parse(savedPosts); // 4. 문자열을 객체로 변환
};

// 새 포스트 저장하기
export const savePost = (post: Omit<Post, 'id' | 'date' | 'author'>): Post => {
  const posts = getPosts(); // 1. 기존 포스트 목록 가져오기
  
  const newPost: Post = { // 2. 새 포스트 객체 생성
    ...post,
    id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    author: 'ychanwoo'
  };
  
  const updatedPosts = [newPost, ...posts]; // 3. 새 포스트를 기존 목록 앞에 추가
  localStorage.setItem('blog_posts', JSON.stringify(updatedPosts)); // 4. 로컬 스토리지에 저장
  
  return newPost;
};

// 포스트 한 건 삭제하기
export const deletePost = (id: number) => {
  try{
    const posts = getPosts();
    const updatedPost = posts.filter(post => post.id != id);

    if(posts.length === updatedPost.length) return false;

    localStorage.setItem('blog_posts', JSON.stringify(updatedPost));
    return true;
  }catch(error){
    console.log('게시물 삭제 중 오류 발생', error);
  }
}