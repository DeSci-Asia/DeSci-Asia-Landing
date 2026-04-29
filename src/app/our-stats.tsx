"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "550+",
    title: "Members",
  },
  {
    count: "15+",
    title: "Speakers",
  },
  {
    count: "43+",
    title: "Workshops and Events",
  },
  {
    count: "8+",
    title: "Countries",
  },
];

const ANNUAL_REVIEW = {
  url: "https://x.com/DeSciAsia/status/2004610246644486166",
  year: "2025",
  tagline: "Year in Review",
  highlights: [
    "500+ builders across 9 Asian cities",
    "14+ monthly scientific meetings",
    "IRL events: DeSci HK, Tokyo, Seoul",
    "1st Asian Grant for DeSci & DAO Research",
    "3-layer governance model launched",
  ],
  focus2026: "Funding infrastructure · Regional expansion · Education",
};

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="purple" className="mb-6 font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Our Stats
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Community Highlights
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          DeSci Asia brings together the brightest minds,
          leading innovators, and top companies working towards Decentralized Science.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
           {/* 2025 Annual Review */}
        
          href={ANNUAL_REVIEW.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
              {ANNUAL_REVIEW.year} {ANNUAL_REVIEW.tagline}
            </span>
            <span className="ml-auto text-sm text-gray-400">↗</span>
          </div>
          <ul className="mb-4 space-y-1">
            {ANNUAL_REVIEW.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1 text-purple-400">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400">
            <span className="font-medium text-gray-500">2026 Focus: </span>
            {ANNUAL_REVIEW.focus2026}
          </p>
        </a>
      </div>
    </section>
  );
}

export default OurStats;
