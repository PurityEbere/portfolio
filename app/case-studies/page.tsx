import Link from "next/link";
import Header from "@/components/Header";
import { plexMono } from "@/lib/fonts";
import { projects } from "@/lib/data";

// const featured = ["smartajo", "raven-partner", "tap-credit", "airvend"];

export default function CaseStudies() {
  // const selected = featured
  //   .map((slug) => projects.find((p) => p.slug === slug))
  //   .filter(Boolean);

  return (
    <>
      <Header />

      <main
        className={`min-h-[80vh] px-6 pt-8 sm:pt-10 sm:px-12 lg:px-20 flex flex-col ${plexMono.className}`}
      >
        <p className="text-xs uppercase tracking-widest text-gray-400">
          My thought processes for all work done
        </p>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-black">
            COMING
            <br />
            SOON.
          </h1>

          <p className="mt-8 text-xs sm:text-sm text-gray-400 tracking-widest uppercase">
            Case studies are currently in the works.
          </p>
        </div>

        {/*
        ORIGINAL CASE STUDY LIST

        <h1 className="mt-3 text-2xl sm:text-3xl">Case studies</h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500">
          A closer look at selected products, the problems behind them, the
          product decisions involved and the work delivered with
          cross-functional teams.
        </p>

        <div className="mt-14 max-w-3xl divide-y divide-gray-200">
          {selected.map((p) => p && (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="flex items-center justify-between gap-6 py-6 group"
            >
              <div>
                <h2 className="text-base text-black group-hover:opacity-60">
                  {p.title}
                </h2>
                <p className="mt-2 text-xs text-gray-400">
                  {p.role} · Product case study
                </p>
              </div>
              <span className="text-gray-400 group-hover:text-black">↗</span>
            </Link>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-6 text-gray-400">
          Case-study pages are starting points. Add verified details about
          your specific ownership, decisions, delivery and outcomes before
          publishing.
        </p>
        */}
      </main>
    </>
  );
}