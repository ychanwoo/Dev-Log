'use client'

import Button from "@/app/components/Button";
import { savePost } from "@/app/utils/posts";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  {ssr: false}
);

type FormInputs = {
  title: string;
  category: string;
};

export default function NewBlog() {
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInputs>({
    defaultValues: {
      title: '',
      category: '' // 빈 문자열로 변경
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data: FormInputs) => {
    // 컨텐츠 유효성 검사
    if (!content || content.trim() === '') {
      setContentError('내용을 입력해주세요');
      return;
    }
    
    try {
      // 글 요약 생성
      const excerpt = content.length > 50 ? content.slice(0, 50) + '...' : content;
      
      // 글 저장
      const newPost = savePost({
        title: data.title,
        category: data.category,
        content,
        excerpt,
      });
      
      console.log('Post saved successfully:', newPost); // 디버깅용 로그
      
      // 목록 페이지로 이동
      router.push('/Posts/List');
    } catch (error) {
      console.error('Error saving post:', error); // 에러 로그
    }
  };

  return(
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">Compose a New Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            id="title" 
            {...register("title", { 
              required: "제목을 입력해주세요",
              minLength: {
                value: 2,
                message: "제목은 최소 2자 이상이어야 합니다"
              }
            })}
            className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
            placeholder="제목을 입력하세요"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* category */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select 
            id="category"
            {...register("category", { 
              required: "카테고리를 선택해주세요",
              validate: (value) => value !== '' || "카테고리를 선택해주세요"
            })}
            className={`w-full px-4 py-3 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white outline-none transition-all`}
          >
            <option value="">카테고리 선택</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Next.js">Next.js</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        {/* content(editor) */}
        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <MDEditor 
            value={content}
            onChange={(value) => {
              setContent(value || '');
              if (value && value.trim() !== '') {
                setContentError('');
              }
            }}
            height={500}
            preview="edit"
          />
          {contentError && (
            <p className="mt-1 text-sm text-red-600">{contentError}</p>
          )}
        </div>

        {/* buttons */}
        <div className="pt-6 flex justify-end space-x-4">
          <Button type="button" href="/Posts/List" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all">취소</Button>
          <button
            type="submit" 
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '저장 중...' : '작성 완료'}
          </button>
        </div>
      </form>
    </div>
  )
}