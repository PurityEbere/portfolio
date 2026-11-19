import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/data";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: site.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        <div className="flex min-h-screen w-full flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}