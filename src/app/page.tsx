"use client";

import Image from "next/image";
import { BadgePlus, CircleFadingArrowUp, Goal, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

//* contact 버튼 클릭 시 맨 아래로 이동
export default function RootPage() {
  const handleToScrollBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#BEBAC6]">
      {/* 간단한 소개 및 프로필 */}
      <div className="flex flex-col items-center justify-center min-h-[95vh] w-full bg-[#BEBAC6] border-b border-[#4D4E57]">
        <div className="flex justify-between w-full px-8">
          {/* 왼쪽 텍스트 및 버튼 영역 */}
          <div className=" pl-20 pt-10">
            <h1 className="text-6xl font-light mb-6">Hey, I&apos;m ychwoo</h1>
            <p className="text-lg whitespace-pre-line">
              I help the sun was setting behind the mountains,{"\n"}
              painting the sky with shades of orange and pink.{"\n"}
            </p>
            <button
              onClick={handleToScrollBottom}
              className="mt-7 text-sm font-light bg-[#EBB1AB] px-18 rounded-3xl border-1 border-black py-3 hover:bg-[#e2aba4]"
            >
              Contact
            </button>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div className="pr-20">
            <Image
              src="/profile.png"
              alt="프로필 사진"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#E9E6E1] flex min-h-[95vh] w-full border-b border-[#4D4E57]">
        <div className="w-1/3">
          <Image
            src="/about.jpg"
            alt="about image"
            width={500}
            height={300}
            className="h-full"
          />
        </div>
        <div className="w-1/2 relative self-center mx-auto my-10">
          <h1 className="text-5xl font-extralight mb-10">About</h1>
          <p className="text-2xl font-extralight mb-5">Introduce</p>
          <p className="mb-10">
            The library was almost empty, with only a few students studying
            quietly. Outside, the rain kept falling, tapping gently on the
            windows. He looked up from his book and stretched, feeling a little
            tired. At that moment, his phone buzzed with a new message.
          </p>

          {/* 기술 스택 */}
          <p className="text-2xl font-extralight mb-5">Stack</p>
          <section className="space-y-4">
            <h4 className="font-bold">Frontend</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-10">
              {[
                { name: "HTML", img: "/tech/html.png" },
                { name: "CSS", img: "/tech/css.png" },
                { name: "TailwindCSS", img: "/tech/tailwindcss.png" },
                { name: "JavaScript", img: "/tech/javascript.png" },
                { name: "TypeScript", img: "/tech/typescript.png" },
                { name: "React", img: "/tech/react.png" },
                { name: "Next.js", img: "/tech/nextjs.png" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group hover:w-44 w-30 h-20 border rounded-lg shadow-sm text-center text-white bg-[#cfcfcf] hover:bg-[#939089] transition flex flex-col justify-center items-center"
                >
                  <div className="flex items-center">
                    <Image
                      src={tech.img}
                      alt={`${tech.name}-icon`}
                      width={50}
                      height={50}
                    />
                    <span className="hidden group-hover:block transition-opacity ml-5">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="font-bold pt-5">Data Science</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Python", img: "/tech/python.png" },
                { name: "Pandas", img: "/tech/pandas.png" },
                { name: "Numpy", img: "/tech/numpy.png" },
                { name: "R", img: "/tech/r.png" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group hover:w-44 w-30 h-20 border rounded-lg shadow-sm text-center text-white bg-[#cfcfcf] hover:bg-[#939089] transition flex flex-col justify-center items-center"
                >
                  <div className="flex items-center">
                    <Image
                      src={tech.img}
                      alt={`${tech.name}-icon`}
                      width={40}
                      height={40}
                    />
                    <span className="hidden group-hover:block transition-opacity ml-5">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Goals */}
      <div className="bg-[#1C1E2A] flex justify-between min-h-[40vh] items-center px-8">
        <div className="flex flex-col items-center text-center">
          <Goal
            size={100}
            strokeWidth={0.5}
            className="text-white mb-7 stroke-gray-400"
          />
          <p className="text-gray-400 font-extralight mb-4">Daily Goal</p>
          <p className="text-gray-400 text-sm">
            Run more than 5 kilometers every day.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <BadgePlus
            size={100}
            strokeWidth={0.5}
            className="text-white mb-7 stroke-gray-400"
          />
          <p className="text-gray-400 font-extralight mb-4">Monthly Goal</p>
          <p className="text-gray-400 text-sm">
            Consistently learning and keeping a simple record of growth.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CircleFadingArrowUp
            size={100}
            strokeWidth={0.5}
            className="text-white mb-7 stroke-gray-400"
          />
          <p className="text-gray-400 font-extralight mb-4">Yearly Goal</p>
          <p className="text-gray-400 text-sm">
            Complete at least one project and keep a record of it.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-[#E9E6E1] min-h-[95vh] w-full rounded-b-[10%] border-b border-[#4D4E57] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extralight mb-20">Projects Archive</h1>
        <section className="flex gap-x-10">
          <div className="bg-[#BAAD78] rounded-[15%] lg:w-95 lg:h-95 p-7 content-center">
            <h2 className="text-2xl font-extralight mt-5">Hobbism</h2>
            <p className="mt-10 font-extralight">
              A playground for hobby enthusiasts, bringing community and
              shopping together. Beyond simple shopping, an enjoyable ecosystem
              that integrates hobbies, communication, and shopping.
            </p>
            {/* project link */}
            <div className="mt-10">
              <Link
                href="https://hobbism.vercel.app/"
                className="underline text-lg text-gray-800 hover:text-gray-700"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="bg-[#BAAD78] rounded-[15%] lg:w-95 lg:h-95 p-7 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extralight mb-4">Coming Soon</h2>
            <Lock size={48} strokeWidth={1} />
          </div>
          <div className="bg-[#BAAD78] rounded-[15%] lg:w-95 lg:h-95 p-7 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extralight mb-4">Coming Soon</h2>
            <Lock size={48} strokeWidth={1} />
          </div>
        </section>
      </div>
    </div>
  );
}
