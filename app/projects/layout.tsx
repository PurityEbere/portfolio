import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore Purity Udeh's product work across fintech, payment infrastructure, APIs, SaaS, digital platforms and emerging technology.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}