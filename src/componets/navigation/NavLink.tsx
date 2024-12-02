import Link from "next/link";


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}