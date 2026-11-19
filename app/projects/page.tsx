"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { plexMono } from "@/lib/fonts";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <>
      <Header />
      <main className={`pt-8 sm:pt-10 ${plexMono.className}`}>
        <div className="mb-5 flex items-end justify-between px-6 sm:px-12 lg:px-16">
          <div>

            <p className="text-xs uppercase tracking-widest text-gray-400">
              Selected work
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-black sm:text-5xl lg:text-5xl">
              Projects<span className="text-gray-300">.</span>
            </h1>
          </div>

          <p className="hidden text-xs text-gray-400 sm:block">
            Select a project to learn more ↗
          </p>
        </div>

        <div className="flex h-[calc(100vh-230px)] min-h-[420px] overflow-hidden">
          <div className="w-4 flex-shrink-0 sm:w-10" />

          <div className="flex w-max animate-projects-right hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex h-full flex-shrink-0"
              >
                {projects.map((p) => (
                  <Link
                    key={`${copy}-${p.slug}`}
                    href={`/work/${p.slug}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="group flex h-full flex-shrink-0 items-center justify-center px-4 sm:px-8"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={p.width}
                      height={p.height}
                      priority
                      unoptimized={p.image.endsWith(".svg")}
                      className="max-h-[58vh] w-auto object-contain transition-opacity group-hover:opacity-80 lg:max-h-[65vh]"
                    />
                    <span className="sr-only">{p.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="w-4 flex-shrink-0 sm:w-10" />
        </div>
      </main>
    </>
  );
}