"use client";

import { store } from "@/redux/app/store";
import { Provider } from "react-redux";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
