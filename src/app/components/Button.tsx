import Link from "next/link";

interface BtnLinkText {
  children: string;
  href: string;
  className?: string;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  className,
  type,
  disabled,
  onClick,
}: BtnLinkText) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <Link type={type} href={href}>
        {children}
      </Link>
    </button>
  );
}
