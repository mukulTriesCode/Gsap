import React from "react";
import Path from "../components/Path";
import Scroll from "../components/Scroll";
import NextScroll from "../components/NextScroll";

const Page = () => {
  return (
    <div>
      {/* <Path /> */}
      <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
      <Scroll />
      {/* <NextScroll /> */}
      <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div>
      {/* <div className="max-w-[1440px] aspect-[2/1] w-full bg-fuchsia-300 mx-auto my-7"></div> */}
    </div>
  );
};

export default Page;
