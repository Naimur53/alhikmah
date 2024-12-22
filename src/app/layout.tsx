import "./globals.css";

import { Providers } from "@/providers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="overflow-hidden">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
