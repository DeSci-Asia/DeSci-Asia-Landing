"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "aurasci",
  "desciindia",
  "descijapan",
  "descikolkata",
  "descilatam",
  "descilondon",
  "desciseoul",
  "descisino",
  "descitokyo",
  "desciworld",
  "gitdataai",
  "fundesci"
];

const SPONSOR_LINKS: { [key: string]: string } = {
  aurasci: "https://aurasci.xyz/",
  desciindia: "https://desciindia.org/",
  descijapan: "https://x.com/DeSciJapan",
  descikolkata: "https://x.com/DeSciKolkata",
  descilatam: "https://bento.me/descilatam",
  descilondon: "https://x.com/DesciLondon",
  desciseoul: "https://x.com/DesciSeoul",
  descisino: "https://x.com/DesciSino",
  descitokyo: "https://desci-tokyo.jp/",
  desciworld: "https://desci.world/",
  gitdataai: "https://gitdata.ai/",
  fundesci: "https://fundesci.com/"
};

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          IN COLLABORATION WITH
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => {
            const link = SPONSOR_LINKS[logo];
            const imageElement = (
              <Image
                width={256}
                height={256}
                key={key}
                src={`/logos/logo-${logo}.jpg`}
                alt={logo}
                className="w-40"
              />
            );

            return link ? (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                {imageElement}
              </a>
            ) : (
              <div key={key}>{imageElement}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
