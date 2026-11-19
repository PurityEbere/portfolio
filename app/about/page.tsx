import Link from "next/link";
import Header from "@/components/Header";
import { plexMono } from "@/lib/fonts";
import { about, site } from "@/lib/data";

const muted = "text-gray-400 hover:text-black transition-colors duration-200";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-8 sm:pt-10">
        <div className={`min-h-screen px-6 sm:px-12 lg:px-20 py-4 ${plexMono.className}`}>
          <div className="max-w-2xl">
            <Link href="/" className="inline-block mb-12 text-gray-400 hover:text-black transition-colors text-sm">
              ← Back
            </Link>
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              {about.map((para, i) => (
                <p key={i}>
                  {para.map((part, j) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <a
                        key={j}
                        href={part.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:opacity-70 transition-opacity underline underline-offset-2"
                      >
                        {part.text}
                      </a>
                    )
                  )}
                </p>
              ))}
            </div>
            <div className="flex gap-6 text-sm mt-12">
              <a href={`mailto:${site.email}`} className={muted}>
                Email
              </a>
              <a href={site.twitter} target="_blank" rel="noopener noreferrer" className={muted}>
                Twitter
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={muted}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
