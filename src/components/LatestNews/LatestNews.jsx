import React from "react";
import Marquee from "react-fast-marquee";
// import Marquee from "react-fast-marquee/dist";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-200 bg-secondary px-3 py-2">Latest</p>

      {/* <Marquee className="flex gap-4"> */}
      <p className="mx-10 font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="mx-10 font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {/* </Marquee> */}
    </div>
  );
};

export default LatestNews;
