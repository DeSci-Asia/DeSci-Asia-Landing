"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  { id: "aurasci", url: "https://aurasci.xyz/" },
  { id: "desciindia", url: "https://desciindia.org/" },
  { id: "descijapan", url: "https://x.com/DeSciJapan" },
  { id: "descikolkata", url: "https://x.com/DeSciKolkata" },
  { id: "descilatam", url: "https://x.com/DeSciLATAM" },
  { id: "descilondon", url: "https://www.desci.london/" },
  { id: "desciseoul", url: "https://x.com/DeSciSeoul" },
  { id: "descisino", url: "https://x.com/DesciSino" },
  { id: "descitokyo", url: "https://desci-tokyo.jp/" },
  { id: "desciworld", url: "https://desci.world" },
  { id: "gitdataai", url: "https://gitdata.ai" },
  { id: "fundesci", url: "https://fundesci.com/" },
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          IN COLLABORATION WITH
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                width={256}
                height={256}
                src={`/logos/logo-${sponsor.id}.jpg`}
                alt={sponsor.id}
                className="w-40"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
