"use client";
import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-zilla-slab)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
        Portfolio. Coming Soon.
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/znarmouq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/znarmouq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-light.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/watch?v=Aq5WXmQQooo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/youtube-2.svg"
            alt="Youtube"
            width={16}
            height={16}
          />
          Youtube
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/fish"
        >
          <Image
            aria-hidden
            src="/fish.svg"
            alt="Fish Stats"
            width={16}
            height={16}
          />
          Stats
        </a>
        
      </footer>
    </div>
  );
}
