import Link from "next/link";


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-[#646464] text-[18px] hover:text-[#1F618D] px-3 font-semibold py-2 transition-colors"
    >
      {children}
    </Link>
  );
}