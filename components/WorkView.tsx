"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { plexMono } from "@/lib/fonts";
import type { Project } from "@/lib/data";

const media = "max-h-[55vh] sm:max-h-[60vh] lg:max-h-[65vh] w-auto object-contain";

export default function WorkView({ project }: { project: Project }) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  // Matches the original: the still image shows whenever the video is paused;
  // the video (which keeps its position) shows only while playing.
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

  // Matches the original: the back arrow always returns to the home gallery.
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
        <button onClick={goBack} aria-label="Back" className="text-gray-300 hover:text-black transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-24 xl:gap-32 px-8 lg:px-16">
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

        <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-8 lg:gap-0">
          <div className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[200px]">
            <h1 className="text-black font-bold text-lg sm:text-xl lg:text-2xl mb-1">{project.title}</h1>
            <p className="text-gray-500 text-sm sm:text-base">{project.role}</p>
            {project.company && <p className="text-gray-500 text-sm sm:text-base">{project.company}</p>}
            {project.year ? (
              <p className="text-black text-sm sm:text-base mt-3 mb-4 lg:mb-6">{project.year}</p>
            ) : (
              <div className="mb-4 lg:mb-6" />
            )}
            {project.description && project.description.length > 0 && (
              <p className="hidden lg:block text-gray-600 text-sm leading-relaxed max-w-[200px]">
                {project.description.map((para, i) => (
                  <Fragment key={i}>
                    {i > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {para}
                  </Fragment>
                ))}
              </p>
            )}
            {project.video && (
              <button
                onClick={toggle}
                aria-label={playing ? "Pause" : "Play"}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors mb-4 lg:mb-6"
              >
                {playing ? (
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>
          <div className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.credits.map((c) => (
              <p key={c} className="whitespace-nowrap">
                {c}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
