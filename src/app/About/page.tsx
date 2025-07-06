import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
  title: 'About',
  description: 'About 페이지 입니다.'
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-gray-800 space-y-12">

      {/* 헤더 섹션 */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="text-lg text-gray-600">안녕하세요, 프론트엔드 개발자 <span className="font-semibold text-indigo-600">우영찬</span> 입니다.</p>
      </div>

      {/* 프로필 이미지 & 기본 정보 */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-32 h-32 border-4 border-indigo-300 rounded-full shadow-lg">
          <Image src="/profile.png" alt="Profile" width={110} height={110} className="ml-1"/>
        </div>
        <h2 className="text-2xl font-semibold mt-4">우영찬</h2>
        <p className="text-gray-500">Frontend Developer</p>
      </div>

      {/* 소개 */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">👋 소개</h3>
        <div className="space-y-2 text-gray-700 leading-relaxed">
          <p>
            안녕하세요! 사용자 경험을 중시하는 프론트엔드 개발자 <span className="font-semibold text-indigo-600">우영찬</span> 입니다.
            <br />
            아름답고 직관적인 웹 인터페이스를 만드는 것에 열정을 가지고 있습니다.
          </p>
          <p>
            새로운 기술을 배우고 적용하는 것을 좋아하며, 특히 사용자 중심의 개발 방법론에 관심이 많습니다. <br />
            개발하면서 겪은 경험과 학습한 내용을 이 블로그를 통해 공유하고자 합니다.
          </p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">🛠️ 기술 스택</h3>
        <h4 className="font-bold">Frontend</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            'JavaScript', 'TypeScript', 'React',
            'Next.js', 'HTML/CSS', 'Tailwind CSS',
            'Git', 'Node.js', 'Figma'
          ].map((tech) => (
            <div key={tech} className="px-4 py-2 border rounded-lg shadow-sm text-center text-gray-700 hover:bg-indigo-50 transition">
              <span>{tech}</span>
            </div>
          ))}
        </div>
        <h4 className="font-bold">Data Science</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            'Python', 'Numpy', 'Pandas','R'
          ].map((tech) => (
            <div key={tech} className="px-4 py-2 border rounded-lg shadow-sm text-center text-gray-700 hover:bg-indigo-50 transition">
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 블로그 목적 */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">📝 블로그 목적</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>프론트엔드 개발 팁과 트릭</li>
          <li>새로운 기술 학습 기록</li>
          <li>프로젝트 경험담</li>
          <li>개발 도구 및 라이브러리 리뷰</li>
          <li>일상 생활과 개발자로서의 성장 이야기</li>
        </ul>
      </section>

      {/* 관심사 */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">🎯 관심사</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>매일 5키로 러닝</li>
          <li>해외축구 시청</li>
          <li>자기개발 관련 독서</li>
        </ul>
      </section>

    </div>
  );
}
