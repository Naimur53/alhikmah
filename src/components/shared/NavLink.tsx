import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className=" px-[28px] py-[6px] text-[#646464] transition-colors text-[24px] font-semibold navlink_hover"
        >
            {children}
        </Link>
    );
}
