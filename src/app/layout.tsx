import type { Metadata } from "next";
import "./globals.css";
import FooterPage from "./Footer/page";
import HeaderPage from "./Header/page";

export const metadata: Metadata = {
  title: "Dev Log",
  description: "Dev Log 보관소 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
