import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Purity Udeh, a Technical Product Manager working across product strategy, technology, engineering and digital product development.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}