import Link from "next/link";

interface BtnLinkText {
  children: string;
  href: string;
  className?: string;
  type?: string;
}

export default function Button({children, href, className, type}: BtnLinkText){
  return(
    <button>
      <Link type={type} href={href} className={className}>{children}</Link>
    </button>
  )
}