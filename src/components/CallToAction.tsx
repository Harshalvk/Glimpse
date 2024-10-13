import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={StarImage}
            alt="Star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={SpringImage}
            alt="Spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 group">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
