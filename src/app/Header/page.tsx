'use client'

import Link from 'next/link'

export default function HeaderPage() {
  return (
    <header>
      <div>
        {/* 헤더바 */}
        <div>
          <Link href="/">
            <span>
              ychanwoo&#39;s Blog
            </span>
          </Link>
        </div>
        
      </div>
    </header>
  )
}