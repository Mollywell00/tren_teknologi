import React from "react";
import { useNavigate } from "react-router-dom";
import CardMedium from "../../atoms/CardMedium";
import DoubleCurvedText from "../../atoms/DoubleCurvedText";

import Banner from "/images/santara.png";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[460px] w-full rounded-4xl">
      <div className="relative h-full w-full overflow-hidden rounded-4xl shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]">
        <img
        className="h-full w-full rounded-4xl object-cover shadow-md "
        src={Banner}
        />
      </div>
      <div className="absolute -bottom-18 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-(--bg-primary-cray)" />
      <div
        className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-(--bg-secondary-cray) shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => {
          window.location.href =
            "mailto:your_email@example.com?subject=Subject&body=message%20goes%20here";
        }}
      >
        <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full ">
          <DoubleCurvedText type="top" />
        </div>

        <i className="fa fa-plus text-xl text-white"></i>

        <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full">
          <DoubleCurvedText type="bottom" />
        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
