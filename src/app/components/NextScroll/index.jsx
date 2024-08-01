"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

export default function Home() {
  const refContainer = useRef(null);
  
  const images = [
    { img: "/photo1.avif", title: "About Us" },
    { img: "/photo2.avif", title: "Why Us" },
    { img: "/photo1.avif", title: "Fast Delivery" },
    { img: "/photo2.avif", title: "5⭐ rating" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".scroll-section");
    const bgImage = gsap.utils.toArray(".bg-image")[0]; // Assuming only one background image

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center", // Start when the top of the section hits the center of the viewport
        end: "bottom center", // End when the bottom of the section hits the center of the viewport
        pin: true, // Pin the section in place
        pinSpacing: false,
        scrub: true,
        onEnter: () => gsap.to(bgImage, { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(bgImage, { opacity: 0, duration: 0.5 }),
        onEnterBack: () => gsap.to(bgImage, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(bgImage, { opacity: 0, duration: 0.5 }),
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-5 items-center p-24">
      <h1 className="text-6xl text-red-400 font-bold">Animate</h1>

      <div className="relative max-w-[1000px] w-full aspect-[2/1]">
        {/* Background Image Container */}
        <div
          className="bg-image absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[0].img})`, opacity: 0 }} // Default opacity
        >
          <Image
            src={images[0].img}
            layout="fill"
            objectFit="cover"
            alt="Background Image"
          />
        </div>

        {/* Scrollable Content */}
        <div ref={refContainer} className="relative w-full aspect-[2/1] overflow-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="scroll-section relative w-full h-screen flex items-center justify-center"
            >
              <span className="text-5xl text-white z-10">{image.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      {/* <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div> */}
    </main>
  );
}
