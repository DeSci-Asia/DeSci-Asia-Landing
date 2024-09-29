"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#FFE1FF] to-white">
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          {/* Use Tailwind classes for text color */}
          <Typography variant="h3" className="mb-2 text-gray-100" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Collective Effort To Improve Science
          </Typography>
          <Typography variant="h1" className="lg:max-w-3xl text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            DeSci Asia
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
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
