"use client";
import React, { useEffect, useRef } from "react";
import Path from "../components/Path";

const DrawLine = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("animation");
    const svg = svgRef.current;

    if (!container || !svg) {
      return;
    }

    const length = svg.getTotalLength();
    svg.style.strokeDasharray = `${length}`;
    svg.style.strokeDashoffset = `${length}`;
    svg.style.transition = "stroke-dashoffset 0.5s ease";

    const options = {
      root: container,
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const containerTop = container.offsetTop;
            const containerHeight = container.clientHeight;
            const scrollPercent =
              ((scrollPosition - containerTop + 700) / containerHeight) * 1.5;
            // console.log(
            //   "scrollPercent",
            //   ((scrollPosition - containerTop + 200) / containerHeight) * 1.5
            // );
            // console.log("scrollPosition", scrollPosition);
            const draw = (length * scrollPercent) / 1.55;
            // console.log("draw", draw);
            svg.style.strokeDashoffset = `${length - draw}`;
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
      <div className="container">
        <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
        <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
        <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
      </div>
      <div className="max-w-[1440px] w-full px-20 mx-auto">
        {/* <div id="animation" className="w-full max-w-[1440px] left-0 top-0">
          <svg
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
                <stop offset="0.172313" stopColor="#FFA500" />
                <stop offset="0.881552" stopColor="#FFA500" />
                <stop offset="1" stopColor="#E5E6E8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-0 left-0 w-full">
            <div className="mt-[10%] mb-[27%] grid grid-cols-2 w-full text-[2.5vw] 2xl:text-[36px]">
              <div className="ps-[5vw] "></div>
              <div className="ps-[5vw] relative">
                <h3 className="text-inherit">Traditional Passwords</h3>
                <div className="absolute -left-[3.8%] top-[50%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                  <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#FFA500]"></div>
                </div>
              </div>
            </div>
            <div className="mt-[5%] mb-[20%] grid grid-cols-2 w-full text-[2.5vw] 2xl:text-[36px]">
              <div className="ps-[5vw] relative">
                <h3 className="text-inherit">Traditional Passwords</h3>
                <div className="absolute left-[50%] md:top-[7.6vw] tab:top-[8vw] lg:top-[8.2vw] xl:top-[8.5vw] 2xl:top-[230%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                  <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#FFA500]"></div>
                </div>
              </div>
              <div className="ps-[5vw] relative">
                <h3 className="text-inherit">Traditional Passwords</h3>
                <div className="absolute left-[50%] md:top-[7.6vw] tab:top-[8vw] lg:top-[8.2vw] xl:top-[8.5vw] 2xl:top-[230%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                  <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#FFA500]"></div>
                </div>
              </div>
            </div>
            <div className="mt-[10%] mb-[27%] grid grid-cols-2 w-full text-[2.5vw] 2xl:text-[36px]">
              <div className="ps-[5vw] relative">
                <h3 className="text-inherit">Traditional Passwords</h3>
                <div className="absolute -left-[2.2%] top-[50%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                  <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#FFA500]"></div>
                </div>
              </div>
            </div>
            <div className="mt-[10%] mb-[27%] grid grid-cols-2 w-full text-[2.5vw] 2xl:text-[36px]">
              <div className="ps-[5vw] relative">
                <h3 className="text-inherit">Traditional Passwords</h3>
                <div className="absolute -left-[2.2%] top-[50%] -translate-y-[50%] rounded-full w-[2vw] 2xl:w-8 aspect-square bg-[#efa33212] backdrop-blur-sm grid place-items-center">
                  <div className="w-[0.8vw] 2xl:w-[11.5px] aspect-square rounded-full bg-[#FFA500]"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Path />
        <div className="container">
          <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
        </div>
      </div>
      {/* <div className="absolute translate-y-[9rem] w-full top-0 left-0">
          <div className="grid grid-cols-2 ps-8">
            <div className=""></div>
            <div className="">Desc 1    </div>
          </div>
        </div> */}
    </>
  );
};

export default DrawLine;
