"use client";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = gsap.utils.toArray("section");
    const images = gsap.utils.toArray(".section-bg");
    const duration = 0.5; // Shortened duration for faster transitions

    function fade(i, from, to) {
      gsap.fromTo(
        images[i],
        { opacity: from },
        { opacity: to, duration: duration, ease: "power2.out" }
      );
    }

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        scrub: true,
        onEnter: () => fade(i, 0, 1),
        onLeave: () => fade(i, 1, 0),
        onEnterBack: () => fade(i, 0, 1),
        onLeaveBack: () => fade(i, 1, 0),
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sectionsData = [
    { heading: "Heading 1", imageUrl: "https://wavecpm.ca/images/1-min.jpg" },
    {
      heading: "Heading 2",
      imageUrl:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Heading 3",
      imageUrl:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Heading 4",
      imageUrl:
        "https://wavecpm.ca/images/1-min.jpg",
    },
    {
      heading: "Heading 5",
      imageUrl:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative">
      {sectionsData.map((section, index) => (
        <section
          key={index}
          className="relative flex items-center justify-center min-h-screen"
        >
          <h1 className="text-4xl font-bold z-10 text-rose-200">
            {section.heading}
          </h1>
          <div
            className="section-bg bg-cover bg-center"
            style={{ backgroundImage: `url(${section.imageUrl})` }}
          ></div>
        </section>
      ))}
    </div>
  );
};

export default Scroll;
