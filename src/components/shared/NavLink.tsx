import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="px-3 py-2 text-[18px] font-semibold text-[#646464] transition-colors hover:text-[#1F618D]"
        >
            {children}
        </Link>
    );
}
