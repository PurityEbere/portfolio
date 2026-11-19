import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing & Activities",
    description:
        "Explore Purity Udeh's writing, technology interests, community work, event organising and activities across the tech ecosystem.",
};

export default function ActivitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}