import Image from "next/image";
import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="bg-[#BEBAC6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-extralight mb-3">Contact</h1>
        <p className="text-gray-700 font-medium mb-2">
          © 2025 ychanwoo. All rights reserved.
        </p>
        <p className="text-gray-600 mb-4">
          Contact:{" "}
          <a
            href="mailto:wooych4931@gmail.com"
            className="text-blue-600 hover:underline"
          >
            wooych4931@gmail.com
          </a>
        </p>
        <div className="mb-4 flex justify-center items-center">
          <Link
            href="https://github.com/ychanwoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Image
              src="/github.png"
              alt="github image"
              width={20}
              height={20}
              className="mr-1"
            />
            <span className="text-gray-700 hover:text-gray-900">GitHub</span>
          </Link>
        </div>
        <p className="text-gray-600 text-sm">
          Dev Log about Frontend Development and daily life.
        </p>
      </div>
    </footer>
  );
}
