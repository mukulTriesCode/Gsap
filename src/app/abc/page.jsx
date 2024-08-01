"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pageElement = pageRef.current;
    const cards = pageElement.querySelectorAll(".card");

    if (cards.length === 0) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageElement.querySelector(".card-wrapper"),
        pin: pageElement.querySelector(".page-wrapper"),
        start: "top top",
        scrub: true,
        markers: true,
        end: () => "+=" + cards.length * cards[0].offsetHeight,
      },
    });
    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.fromTo(card, { yPercent: 0 }, { yPercent: -100, duration: 0.5 });
    });

    // Clean up the ScrollTrigger instances on component unmount
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={pageRef}>
      <div className="page-wrapper">
        <h1>GSAP Starter Template</h1>
        <p>
          This pen loads all GSAP files, giving you all the animation
          superpowers that GSAP offers including the Club GreenSock bonus
          plugins (for use on codepen.io only). Fork and enjoy!
        </p>

        <div className="wrapper">
          <div className="card-wrapper">
            <div className="card card-1">1</div>
            <div className="card card-2">2</div>
            <div className="card card-3">3</div>
            <div className="card card-4">4</div>
            <div className="card card-5">5</div>
            <div className="card card-6">6</div>
          </div>
          <div>
            <div>
              <p>some text</p>
            </div>
          </div>
        </div>
        <h1>GSAP Starter Template</h1>
        <p>
          This pen loads all GSAP files, giving you all the animation
          superpowers that GSAP offers including the Club GreenSock bonus
          plugins (for use on codepen.io only). Fork and enjoy!
        </p>
      </div>
    </div>
  );
};

export default Page;
