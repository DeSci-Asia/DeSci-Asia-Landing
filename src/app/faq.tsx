"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What is DeSci Asia?",
    desc: "DeSci Asia is a community to support the decentralized science (DeSci) movement in Asia and globally. We are gradually moving toward a more structured DAO model as our community grows and evolves. Our mission is to promote open research, foster collaboration, and advance decentralized scientific efforts worldwide.",
  },
  {
    title: "2. Who can join DeSci Asia?",
    desc: "Anyone with an interest in decentralized science, open research, and innovation can join. Whether you're a researcher, developer, or simply a supporter of DeSci, you're welcome to contribute.",
  },
  {
    title: "3. What are the goals of DeSci Asia?",
    desc: "Our goals include supporting scientific projects in the DeSci space, fostering partnerships, promoting open access to scientific knowledge, building a global community of researchers and innovators, and representing the interests of DeSci entities that are part of our community.",
  },
  {
    title: "4. How does DeSci Asia support scientific projects?",
    desc: "We provide resources such as funding opportunities, networking events, collaborations with ecosystem projects, and knowledge-sharing platforms to help decentralized science projects thrive.",
  },
  {
    title: "5. How can I get involved with DeSci Asia?",
    desc: "You can get involved by, joining our Telegram group, participating in community events, joining discussions in our online sessions, contributing to DeSci initiatives, or partnering with us on projects. More details can be found on our official Telegram channels.",
  },
  {
    title: "6. What kind of events does DeSci Asia?",
    desc: "We host a variety of events, including online discussions (Twitter Spaces), workshops, and networking sessions, where participants can learn, collaborate, and share insights about decentralized science.",
  },
  {
    title: "7. Is DeSci Asia limited to Asia?",
    desc: "While we focus on supporting decentralized science efforts in Asia, DeSci Asia is not limited to this region. We aim to represent and support the DeSci movement globally.",
  },
  {
    title: "8. How is DeSci Asia funded?",
    desc: "We are funded through contributions from community members, partnerships, and potential grant funding from relevant organizations supporting decentralized science.",
  },
  {
    title: "9. What are the benefits of joining DeSci Asia?",
    desc: "By joining, you’ll have access to a supportive community, networking opportunities with DeSci experts, potential funding for projects, and the ability to collaborate on initiatives that advance decentralized science.",
  },
  {
    title: "10. How do decisions get made in DeSci Asia?",
    desc: "Decisions are made collectively in our telegram group where community members can participate in proposals and voting to shape the future.",
  },
];



export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section id="faq" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Let us address your most common queries and provide you with the
            information you need to understand us better.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <AccordionHeader className="text-left text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
