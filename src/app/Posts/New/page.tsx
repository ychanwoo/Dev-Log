'use client'

import Button from "@/app/components/Button";
import { FormEvent, useState } from "react";


export default function NewBlog(){
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('HTML/CSS');
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, category, content });
  }
  return(
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">Compose a New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Title"
          />
        </div>

        {/* category */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white outline-none transition-all"
          >
            <option value="HTML/CSS">Select Categort</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Next.js">Next.js</option>
          </select>
        </div>

        {/* content */}
        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            rows={15} 
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Write your content here..."
          />
        </div>

        {/* buttons */}
        <div className="pt-6 flex justify-end space-x-4">
          <Button type="button" href="/Posts/List" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all">cancel</Button>
          <Button type="submit" href="/Posts/List" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">작성 완료</Button>
        </div>
      </form>
    </div>
  )
}