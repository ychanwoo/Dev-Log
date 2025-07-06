import Button from "./components/Button";
import Image from "next/image"

export default function RootPage(){
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6">
      <h1 className="font-bold text-4xl text-center animate-bounce">Welcome To My Blog</h1>
      <div className="w-32 h-32 border-4 border-indigo-300 rounded-full shadow-lg">
        <Image src='/profile.png' alt="프로필 사진" width={110} height={110} className="ml-1"/>
      </div>
      <div className="flex space-x-6">
        <Button href="/Posts" className="bg-indigo-400 hover:bg-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Blog</Button>
        <Button href="/About" className="bg-gray-400 hover:bg-gray-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">About</Button>
      </div>
    </div>
  )
}