import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Product case studies exploring digital products, product decisions, technical challenges and the work involved in building technology solutions.",
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}