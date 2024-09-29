"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Support",
    description:
      "Get support for your projects and collaborate with us on events and joint initiatives.",
    subTitle: "Funding and Partnerships",
  },
  {
    title: "Ecosystem Knowledge",
    description:
      "Join our Twitter Spaces in collaboration with ecosystem projects to discuss the latest efforts in DeSci.",
    subTitle: "Online Discussions",
  },
];


export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="purple">
      Why Join?
      </Typography>
     
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        
We’re a community-led DAO supporting the decentralized science movement in Asia and globally. By joining us, you'll help drive open access to research, collaboration, and innovation across borders. Together, we aim to make science more transparent, accessible, and inclusive for all.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Building Connections"
            subTitle="Community"
            description="Form strong connections with DeSci innovators and peers to foster mutual growth and opportunities."
            />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
