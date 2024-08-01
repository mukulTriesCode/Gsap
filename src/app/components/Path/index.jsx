"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
const Path = () => {
  const svgRef = useRef(null);
  useEffect(() => {
    const container = document.getElementById("animation");
    const svg = svgRef.current;
    if (!container || !svg) return;
    const length = svg.getTotalLength();
    svg.style.strokeDasharray = `${length}`;
    svg.style.strokeDashoffset = `${length}`;
    svg.style.transition = "stroke-dashoffset 0.5s ease";
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.clientHeight;
      const scrollPercent =
        ((scrollPosition - containerTop + 500) / containerHeight) * 1.5;
      const draw = (length * scrollPercent) / 1.55;
      svg.style.strokeDashoffset = `${length - draw}`;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { root: container, threshold: 0.2 }
    );
    observer.observe(svg);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div id="animation" className="w-full left-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1205"
          viewBox="0 0 1205 1252"
          fill="none"
        >
          <path
            d="M617.5 0V253.5C617.5 283.876 642.124 308.5 672.5 308.5H1149C1179.38 308.5 1204 333.124 1204 363.5V615.5C1204 645.876 1179.38 670.5 1149 670.5H56C25.6243 670.5 1 695.124 1 725.5V1252"
            stroke="#B7B7B7"
            strokeWidth="2"
          />
          <path
            ref={svgRef}
            d="M617.5 0V253.5C617.5 283.876 642.124 308.5 672.5 308.5H1149C1179.38 308.5 1204 333.124 1204 363.5V615.5C1204 645.876 1179.38 670.5 1149 670.5H56C25.6243 670.5 1 695.124 1 725.5V1252"
            stroke="url(#line-progress)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="line-progress"
              x1="0"
              y1="1252"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E5E6E8" />
              <stop offset="0.172313" stopColor="#FFA500" />
              <stop offset="0.881552" stopColor="#FFA500" />
              <stop offset="1" stopColor="#E5E6E8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-0 left-0 w-full">
          <div className="mt-[8%] mb-[19%] grid grid-cols-2 w-full text-[1.9458vw] 2xl:text-[28px]">
            <div className="ps-[5vw] 2xl:ps-[72px]"></div>
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <p className="text-[1.5vw] 2xl:text-[21.6px] mb-[2%]">(01)</p>
              <h3 className="text-inherit">Business Current Assessment</h3>
              <div className="relative">
                <p className="w-[90%] absolute font-light top-0 left-0 mt-[2%] text-[0.903vw] 2xl:text-[13px] tracking-[0.045vw] 2xl:tracking-[0.65px]">
                  Develop a comprehensive branding strategy for the hotel
                  through a week-long process of market analysis, competitor
                  assessment, and strategic planning to align with the hotel's
                  vision and objectives.
                </p>
              </div>
              <div className="absolute left-0 top-[100%] -translate-y-[100%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#f90]"></div>
              </div>
            </div>
          </div>
          <div className="mt-[5%] mb-[22%] grid grid-cols-2 w-full text-[1.9458vw] 2xl:text-[28px]">
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <p className="text-[1.5vw] 2xl:text-[21.6px] mb-[2%]">(01)</p>
              <h3 className="text-inherit">Business Current Assessment</h3>
              <div className="relative">
                <p className="w-[90%] absolute font-light top-0 left-0 mt-[2%] text-[0.903vw] 2xl:text-[13px] tracking-[0.045vw] 2xl:tracking-[0.65px]">
                  Develop a comprehensive branding strategy for the hotel
                  through a week-long process of market analysis, competitor
                  assessment, and strategic planning to align with the hotel's
                  vision and objectives.
                </p>
              </div>
              <div className="absolute left-[50%] md:top-[17vw] tab:top-[17.5vw] lg:top-[19vw] xl:top-[19.3vw] 2xl:top-[333%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#F90]"></div>
              </div>
            </div>
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <p className="text-[1.5vw] 2xl:text-[21.6px] mb-[2%]">(01)</p>
              <h3 className="text-inherit">Business Current Assessment</h3>
              <div className="relative">
                <p className="w-[90%] absolute font-light top-0 left-0 mt-[2%] text-[0.903vw] 2xl:text-[13px] tracking-[0.045vw] 2xl:tracking-[0.65px]">
                  Develop a comprehensive branding strategy for the hotel
                  through a week-long process of market analysis, competitor
                  assessment, and strategic planning to align with the hotel's
                  vision and objectives.
                </p>
              </div>
              <div className="absolute left-[50%] md:top-[17vw] tab:top-[17.5vw] lg:top-[19vw] xl:top-[19.3vw] 2xl:top-[333%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#F90]"></div>
              </div>
            </div>
          </div>
          <div className="mt-[10%] mb-[15%] grid grid-cols-2 w-full text-[1.9458vw] 2xl:text-[28px]">
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <p className="text-[1.5vw] 2xl:text-[21.6px] mb-[2%]">(01)</p>
              <h3 className="text-inherit">Business Current Assessment</h3>
              <div className="relative">
                <p className="w-[90%] absolute font-light top-0 left-0 mt-[2%] text-[0.903vw] 2xl:text-[13px] tracking-[0.045vw] 2xl:tracking-[0.65px]">
                  Develop a comprehensive branding strategy for the hotel
                  through a week-long process of market analysis, competitor
                  assessment, and strategic planning to align with the hotel's
                  vision and objectives.
                </p>
              </div>
              <div className="absolute -left-[2.2%] top-[50%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#F90]"></div>
              </div>
            </div>
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <div className="absolute rounded-lg overflow-hidden max-w-[80%]">
                <Image
                  src="/s.jpg"
                  alt=""
                  width={800}
                  height={800}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="mt-[10%] mb-[27%] grid grid-cols-2 w-full text-[1.9458vw] 2xl:text-[28px]">
            <div className="ps-[5vw] 2xl:ps-[72px] relative max-w-[90%]">
              <p className="text-[1.5vw] 2xl:text-[21.6px] mb-[2%]">(01)</p>
              <h3 className="text-inherit">Business Current Assessment</h3>
              <div className="relative">
                <p className="w-[90%] absolute font-light top-0 left-0 mt-[2%] text-[0.903vw] 2xl:text-[13px] tracking-[0.045vw] 2xl:tracking-[0.65px]">
                  Develop a comprehensive branding strategy for the hotel
                  through a week-long process of market analysis, competitor
                  assessment, and strategic planning to align with the hotel's
                  vision and objectives.
                </p>
              </div>
              <div className="absolute -left-[2.2%] top-[50%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#F90]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Path;
