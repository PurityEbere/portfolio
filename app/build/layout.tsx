import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Build With Me",
    description:
        "Explore opportunities to work with Purity Udeh on product ideas, technology projects, product strategy and engineering-led initiatives.",
};

export default function BuildLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}