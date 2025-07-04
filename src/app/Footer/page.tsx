import Image from "next/image"
import Link from "next/link"

export default function FooterPage(){
  return (
    <footer>
      <p>© 2025 ychanwoo. All rights reserved.</p>
      <p>A blog about Frontend Development and daily life.</p>
      <div>
        <p>Contact: <a href="mailto:chxan02@naver.com">chxan02@naver.com</a></p>
        <Link href="https://github.com/ychanwoo" target="_blank" rel="noopener noreferrer">
          <Image src='/github.png' alt="github image" width={20} height={20} />
          GitHub
        </Link>
      </div>
    </footer>
  )
}