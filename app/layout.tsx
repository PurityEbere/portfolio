import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/data";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://purity.udrics.com"),

  title: {
    default: "Purity Udeh | Technical Product Manager — Product & Engineering",
    template: "%s | Purity Udeh",
  },

  description:
    "Purity Udeh is a Technical Product Manager with 5+ years of experience building and scaling digital products across fintech, payment infrastructure, APIs and SaaS. Her work spans product strategy, technical discovery, engineering delivery, integrations and digital platforms across Africa, the UK and Europe.",

  keywords: [
    "Purity Udeh",
    "Technical Product Manager",
    "Senior Technical Product Manager",
    "Senior Product Manager",
    "Product Strategy",
    "Technical Product Management",
    "Fintech",
    "Payment Infrastructure",
    "Payment APIs",
    "Cross-border Payments",
    "SaaS",
    "Digital Products",
    "Product Engineering",
    "Engineering Delivery",
    "Product Development",
  ],

  authors: [{ name: "Purity Udeh" }],
  creator: "Purity Udeh",

  openGraph: {
    title: "Purity Udeh | Technical Product Manager — Product & Engineering",
    description:
      "Explore Purity Udeh's work across product strategy, fintech, payment infrastructure, APIs, SaaS and engineering delivery.",
    url: "https://purity.udrics.com",
    siteName: "Purity Udeh",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Purity Udeh | Technical Product Manager",
    description:
      "Technical Product Manager working across product strategy, payment infrastructure, APIs, fintech and engineering delivery.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
      </body>
    </html>
  );
}