"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { plexMono } from "@/lib/fonts";
import { site } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  const navClass = (href: string) => {
    const isActive = pathname === href;

    return `transition-colors duration-200 ${isActive
      ? "text-black font-bold"
      : "text-gray-400 hover:text-black"
      }`;
  };

  return (
    <header className={`relative z-0 w-full bg-white ${plexMono.className}`}>
      <div className="flex justify-between items-start px-8 sm:px-12 lg:px-16 py-8 sm:py-10">
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-6xl"
          >
            Purity Udeh
          </Link>

          <p className="mt-3 text-lg font-bold tracking-tight text-black sm:text-xl">
            Technical Product Manager — Product & Engineering
          </p>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex flex-col items-end gap-0.5 text-sm sm:text-base"
        >
          <Link href="/build" className={navClass("/build")}>
            Let's work
          </Link>

          <Link href="/projects" className={navClass("/projects")}>
            Projects
          </Link>

          <Link href="/activities" className={navClass("/activities")}>
            Activities
          </Link>

          <Link href="/about" className={navClass("/about")}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}