import { notFound } from "next/navigation";
import WorkView from "@/components/WorkView";
import { getProject, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <main className="pt-8">
      <WorkView project={project} />
    </main>
  );
}
