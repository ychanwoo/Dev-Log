import Link from "next/link";

interface BtnLinkText {
  children: string;
  href: string;
}

export default function Button({children, href}: BtnLinkText){
  return(
    <button>
      <Link href={href}>{children}</Link>
    </button>
  )
}