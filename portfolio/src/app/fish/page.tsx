// app/fish/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';




  const fishCaught = [
    { name: "Carp", count: 4 },
    { name: "Bass", count: 1 },
    { name: "Crappie", count: 4 },
    { name: "Snake Head", count: 0 },
    { name: "Trout", count: 0 },
  ];

export default function Fish() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-zilla-slab)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
        {/* Fishing Stats */}

        {/* <h1>Fish I Caught</h1>
        <FishPage /> */}

    <div className="flex flex-col items-center">
        Fishing Stats
        <div style={{ width: 500, height: 500 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={fishCaught}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              {/* <PolarRadiusAxis /> */}
              <Radar
                name="Zaid"
                dataKey="count"
                stroke="#8884FF"
                fill="#88ff"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
    </div>

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

        <Link
            href="/"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
            <Image
                aria-hidden
                src="/home.svg"
                alt="Fish Stats"
                width={16}
                height={16}
            />
            Home
        </Link>
      </footer>
    </div>
  );
}
