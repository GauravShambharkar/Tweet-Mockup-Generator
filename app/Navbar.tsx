import { Sparkles } from "lucide-react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="border-b bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-gray-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-end gap-1.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center">
                {/* <Sparkles className="w-6 h-6 text-white" /> */}
                <img className="size-8" src="/KreatOSLogo.svg" alt="" />
              </div>
              <h1 className="text-2xl font-light tracking-tighter bg-gradient-to-t from-blue to-[#8bb5ff] dark:from-[#2f7bff] dark:to-[#87b3ff] bg-clip-text text-transparent">
                kreatOS
              </h1>
            </Link>

            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
