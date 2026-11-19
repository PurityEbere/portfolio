import { plexMono } from "@/lib/fonts";

export default function Footer() {
    return (
        <footer className={`px-8 sm:px-12 lg:px-16 pb-10 pt-8 ${plexMono.className}`}>
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-6 text-sm">
                <a
                    href="https://www.linkedin.com/in/purityudeh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all"
                >
                    LinkedIn ↗
                </a>

                <a
                    href="https://x.com/ebyereh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all"
                >
                    Twitter ↗
                </a>

                <a
                    href="https://github.com/PurityEbere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all"
                >
                    GitHub ↗
                </a>
            </div>
        </footer>
    );
}