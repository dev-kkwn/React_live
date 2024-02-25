import React from "react";
import sec1banner from "../assests/sec-1-banner.jpg";
import aboutimg1 from "../assests/home-about-img1.jpg";
export default function Section1() {
  return (
    <section>
      <div id="sec1" className="container h-[450px] md:h-[600px] lg:w-full">
        <div className="absolute ">
          <img
            src={sec1banner}
            className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
            alt=""
          />
        </div>
        <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
          <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px]">
            PROVIDING ENERGY SOLUCTIONS
          </h1>
          <p className="text-sm w-auto mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8">
            <span className="lg:block">At OLSORTZ,</span> we're in the business
            of enhancing life's possibilities.
          </p>
          <a href="" className="border mt-9 p-2 text-sm md:text-lg xl:text-xl ">
            SEE HOW WE DO IT{" "}
            <span className="h-2 p-1 bg-white rounded-md ml-4">1234</span>
          </a>
        </div>
      </div>

      <div id="sec2" className="container mx-0 lg:w-[100%] p-10 xl:w-auto">
        <div className="flex  flex-wrap">
          <div className="h-auto w-full lg:w-1/2 text-center justify-center p-4">
            <p className="text-md my-5 mb-6 xl:text-xl xl:mt-16">
              <span className=""> - </span> ABOUT US <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
              OIL & GAS INNOVATORS: DRIVING PROGRESSN IN THE INDUSTRY
            </h1>
            <p className="text-md my-6 text-justify xl:text-xl xl:mb-9">
              From exploration and production to transportation and refining, we
              offer a wide range of products and services that meet the unique
              needs of the oil & gas industry. Our commitment to excellence and
              customer satisfaction is reflected in our rigorous quality control
              processes.
            </p>
            <a href="" className="text-xl xl:text-3xl ">
              Learn More +
            </a>
          </div>
          <div className="h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={aboutimg1}
              className="p-5 rounded-md object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
