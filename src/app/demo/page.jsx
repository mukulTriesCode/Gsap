"use client";
import { ScrollSmoother } from "gsap/all";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const refContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [bgToggle, setBgToggle] = useState(false);

  const images = [
    { img: "/photo1.avif", title: "About Us" },
    { img: "/photo2.avif", title: "Why Us" },
    { img: "/photo1.avif", title: "Fast Delivery" },
    { img: "/photo2.avif", title: "5⭐ rating" },
  ];

  const isFullyInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
      

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth
    );
  };

  const handleScroll = (e) => {
    const container = refContainer.current;
    if (!isFullyInViewport(container)) {
      // Allow normal scrolling when the container is not fully in the viewport
      return;
    }

    const delta = e.deltaY;

    if (currentIndex === 0 && delta < 0) {
      // Allow normal scrolling when at the first image and scrolling up
      return;
    }

    if (currentIndex === images.length - 1 && delta > 0) {
      // Allow normal scrolling when at the last image and scrolling down
      return;
    }

    e.preventDefault();

    // Clear any existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a timeout to manage the scroll handling
    setScrollTimeout(
      setTimeout(() => {
        if (delta > 0) {
          // Scrolling down
          if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) =>
              Math.min(prevIndex + 1, images.length - 1)
            );
            setBgToggle(!bgToggle);
          }
        } else if (delta < 0) {
          // Scrolling up
          if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            setBgToggle(!bgToggle);
          }
        }
      }, 300) // Adjust the delay as needed (in milliseconds)
    );
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [currentIndex, images.length, scrollTimeout]);

  useEffect(() => {
    const container = refContainer.current;
    const newScrollTop = currentIndex * container.clientHeight;
    container.scrollTo({
      top: newScrollTop,
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <main className="flex min-h-screen flex-col gap-5 items-center p-24">
      <h1 className="text-6xl text-red-400 font-bold">Animate</h1>
      <div className="w-full aspect-[2/1] bg-red-200"></div>
      <div className="relative max-w-[1000px] w-full aspect-[2/1] bg-black bg-opacity-30">
        <div
          className={`absolute -z-10 max-w-[1000px] duration-500 w-full bg-cover bg-center aspect-[2/1] ${
            bgToggle ? "opacity-100" : "opacity-50"
          }`}
          // style={{
          //   backgroundImage: `url(${images[currentIndex]})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // }}
        >
          <Image
            className={`w-full aspect-[2/1] object-cover ${
              bgToggle ? "opacity-100" : "opacity-50"
            }`}
            src={images[currentIndex].img}
            width={1000}
            height={500}
            alt=""
          />
        </div>
        <div
          className={`absolute -z-10 max-w-[1000px] duration-500 w-full bg-cover bg-center aspect-[2/1] ${
            !bgToggle ? "opacity-100" : "opacity-50"
          }`}
          // style={{
          //   backgroundImage: `url(${
          //     currentIndex < images.length ? images[currentIndex] : ""
          //   })`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // }}
        >
          <Image
            className={`w-full aspect-[2/1] object-cover ${
              !bgToggle ? "opacity-100" : "opacity-50"
            }`}
            src={images[currentIndex].img}
            width={1000}
            height={500}
            alt=""
          />
        </div>
        <div
          ref={refContainer}
          className="max-w-[1000px] w-full aspect-[2/1] overflow-auto no-scrollbar"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-[2/1] w-full relative flex items-center justify-center"
              // style={{
              //   backgroundImage: `url(${src})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <span className="text-5xl text-white z-10">{src.title}</span>
              {/* The z-10 makes sure the text appears on top of the background image */}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
      <div className="bg-purple-400 max-w-[1000px] aspect-[2/1] w-full"></div>
    </main>
  );
}
