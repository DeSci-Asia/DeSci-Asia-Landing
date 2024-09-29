"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#FFE1FF] to-white">
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="gray-100" className="mb-2">
            Collective Effort To Improve Science
          </Typography>
          <Typography variant="h1" color="gray-900" className="lg:max-w-3xl">
            DeSci Asia
          </Typography>
          <Typography
            variant="lead"
            color="gray-700"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Empowering Better Science Collaboration
          </Typography>
          <div className="flex items-center gap-4">
            {/* <Button variant="gradient" color="white">
              Explore
            </Button> */}
            
            {/* <IconButton className="rounded-full bg-white p-6">
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
