"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card: HTMLElement, index) => {
      const angle = (index / 5) * 360;
      gsap.fromTo(
        card,
        { rotate: angle },
        {
          rotate: angle + 360,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden p-20">
      <div className="relative max-w-72 w-full aspect-square max-h-72 rounded-full border-2 border-gray-300 flex justify-center items-center">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Card key={index} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Page;

const Card = ({ index }) => {
  const angle = (index / 5) * 360;
  const radius = 120; // Adjust the radius based on the container size
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="card absolute w-28 h-20 bg-sky-200 border-2 border-rose-300/40 flex justify-center items-center rounded-lg"
      style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
    >
      <div className="transform rotate-90">Card {index + 1}</div>
    </div>
  );
};
