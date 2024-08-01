"use client";
import React, { useEffect, useRef } from "react";

const DrawLine = () => {
  const circleRef = useRef(null);
  const circle2Ref = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("animation");
    const steps = document.querySelectorAll(".step");
    const circle = circleRef.current;
    const circle2 = circle2Ref.current;
    const svg = svgRef.current;

    if (!container || !circle || !circle2 || !svg) {
      return;
    }

    const options = {
      root: container,
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const length = svg.getTotalLength();
          svg.style.strokeDasharray = `${length}`;
          svg.style.strokeDashoffset = `${length}`;

          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const containerTop = container.offsetTop;
            const containerHeight = container.clientHeight;
            const scrollPercent =
              ((scrollPosition - containerTop + 200) / containerHeight) * 1.5;
            const circlePath = svg.getPointAtLength(scrollPercent * length);
            circle.setAttribute("cx", String(circlePath.x));
            circle.setAttribute("cy", String(circlePath.y));
            circle2.style.fill = "#3F51B5";
            const draw = length * scrollPercent;
            svg.style.strokeDashoffset = `${length - draw}`;

            steps.forEach((step) => {
              const rect = step.getBoundingClientRect();
              const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;
              if (rect.top >= 0 && rect.bottom <= windowHeight) {
                step.classList.add("step-show");
              } else {
                step.classList.remove("step-show");
              }
            });
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
          };
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(svg);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="max-w-[1000px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto"></div>
      <div id="animation">
        <svg
          width="1742"
          height="2365"
          viewBox="0 0 1742 2365"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34"
            stroke="#E5E6E8"
            strokeWidth="3"
          />
          <path
            ref={svgRef}
            d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34"
            stroke="url(#line-progress)"
            strokeWidth="3"
            style={{
              strokeDashoffset: "0.0007",
              strokeDasharray: "939.845px, 3872.01px",
            }}
          />
          <defs>
            <linearGradient
              id="line-progress"
              x1="-106"
              y1="2316.5"
              x2="-117"
              y2="-45.4999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E5E6E8" />
              <stop offset="0.172313" stopColor="#324EEF" />
              <stop offset="0.881552" stopColor="#324EEF" />
              <stop offset="1" stopColor="#E5E6E8" />
            </linearGradient>
          </defs>
          <circle ref={circleRef} cx="857.752" cy="0" r="8" fill="#3F51B5" />
          <circle ref={circle2Ref} cx="857.752" cy="0" r="8" fill="#1F2020" />
        </svg>
      </div>
      <div className="max-w-[1000px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto"></div>
    </>
  );
};

export default DrawLine;
