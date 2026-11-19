"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { plexMono } from "@/lib/fonts";
import type { Project } from "@/lib/data";

const media = "max-h-[55vh] sm:max-h-[60vh] lg:max-h-[65vh] w-auto object-contain";

export default function WorkView({ project }: { project: Project }) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));

    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }

    return () => cancelAnimationFrame(id);
  }, []);

  const goBack = () => router.push("/");

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      setPlaying(true);
      v.play().catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${plexMono.className} transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="px-8 lg:px-16 mb-8">
        <button
          onClick={goBack}
          aria-label="Back"
          className="text-gray-300 hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-24 xl:gap-32 px-8 lg:px-16">

        {/* Project image - unchanged */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="relative">
            {!playing && (
              <Image
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
                priority
                unoptimized={project.image.endsWith(".svg")}
                style={{ color: "inherit" }}
                className={media}
              />
            )}

            {project.video && (
              <video
                ref={videoRef}
                src={project.video}
                loop
                playsInline
                onEnded={() => setPlaying(false)}
                className={`${media} rounded-lg ${playing ? "block" : "hidden"}`}
              />
            )}
          </div>
        </div>

        {/* DESKTOP - original layout preserved */}
        <div className="hidden lg:flex order-1 flex-row lg:flex-col gap-8 lg:gap-0">
          <div className="flex-shrink-0 w-[200px]">
            <h1 className="text-black font-bold text-2xl mb-1">
              {project.title}
            </h1>

            <p className="text-gray-500 text-base">{project.role}</p>

            {project.company && (
              <p className="text-gray-500 text-base">{project.company}</p>
            )}

            {project.year ? (
              <p className="text-black text-base mt-3 mb-4 lg:mb-6">
                {project.year}
              </p>
            ) : (
              <div className="mb-4 lg:mb-6" />
            )}

            {project.description && project.description.length > 0 && (
              <div className="block w-full max-w-[320px] text-gray-600 text-sm leading-relaxed">
                {project.description.map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            {project.video && (
              <button
                onClick={toggle}
                aria-label={playing ? "Pause" : "Play"}
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors mb-6"
              >
                {playing ? (
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          <div className="text-gray-400 text-base leading-relaxed">
            {project.credits.map((c) => (
              <p key={c} className="whitespace-nowrap">
                {c}
              </p>
            ))}
          </div>
        </div>

        {/* MOBILE - new layout */}
        <div className="flex flex-col gap-8 order-2 lg:hidden">

          {/* Project details and credits */}
          <div className="grid grid-cols-2 gap-4">

            {/* Left column */}
            <div>
              <h1 className="text-3xl font-bold text-black mb-3">
                {project.title}
              </h1>

              <p className="text-lg leading-relaxed text-gray-500">
                {project.role}
              </p>

              {project.company && (
                <p className="text-lg leading-relaxed text-gray-500">
                  {project.company}
                </p>
              )}

              {project.year && (
                <p className="text-lg text-black mt-6">
                  {project.year}
                </p>
              )}

              {project.video && (
                <button
                  onClick={toggle}
                  aria-label={playing ? "Pause" : "Play"}
                  className="mt-8 w-20 h-20 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  {playing ? (
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              )}
            </div>

            {/* Right column - credits */}
            <div className="text-gray-400 text-lg leading-relaxed">
              {project.credits.map((c) => (
                <p key={c} className="mb-2 break-words">
                  {c}
                </p>
              ))}
            </div>
          </div>

          {/* Full-width mobile description */}
          {project.description && project.description.length > 0 && (
            <div className="w-full text-gray-600 text-sm leading-7">
              {project.description.map((para, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}