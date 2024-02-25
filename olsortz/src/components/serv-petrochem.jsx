import React from "react";
import itbanner from "../assert/it-img.jpg";
import itimg1 from "../assert/it-img1.png";

export function Petrochem() {
  return (
    <div>
      <section>
        <div
          id="sec1"
          className="container h-[450px] md:h-[520px] lg:w-full xl:h-[600px]"
        >
          <div className="absolute ">
            <img
              src={itbanner}
              className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
              alt=""
            />
          </div>
          <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
            <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px]">
              PROVIDING ENERGY SOLUCTIONS
            </h1>
            <p className="text-sm w-auto mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8">
              <span className="lg:block">At OLSORTZ,</span> we're in the
              business of enhancing life's possibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-4 md:px-14 lg:px-32 lg:leading-loose xl:px-40 mt-5 font-[500]  lg:font-semibold font-sans">
          <h1 className="text-3xl md:text=xl lg:text=6xl ">
            We have entered the next era of digital transformation. This is
            characterized by a growing convergence of product, software, data,
            and services across all industries. At Capgemini we call this
            'Intelligent Industry'.
          </h1>
        </div>
        <div className="p-4 mb-5 md:px-14 lg:px-32 lg:leading-relaxed xl:px-40 font-sans ">
          <p className="font-[500]lg:text=lg opacity-90">
            Capgemini helps you use digital technologies to unlock the potential
            of your physical and digital worlds. We help you look at what you
            already have in a different light, revolutionizing and securing
            everything from products, to processes, to supply chains, so you can
            imagine what's next.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <div className="my-5 py-4 px-2 md:px-4 xl:px-10">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl">
            WHAT ENABLES{" "}
            <span className="font-bold">INTELLIGENT INDUSTRY?</span>
          </h1>
        </div>
        <div className="flex justify-center gap-14 flex-wrap md:flex-nowrap">
          <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 ">
            <div>
              <img
                src={itimg1}
                className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-64 md:h-48 lg:h-72 object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">
                Hyper-convergence
              </h1>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl">
                Hardware and software are being brought closer together,
                traditional industries are blurring their boundaries (e.g.,
                automotive and energy) and future innovations will fuse together
                the digital, physical, and biological.
              </h2>
            </div>
          </div>

          <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 ">
            <div>
              <img
                src={itimg1}
                className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-72 md:h-48 lg:h-72 object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">
                Hyper-convergence
              </h1>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl">
                Hardware and software are being brought closer together,
                traditional industries are blurring their boundaries (e.g.,
                automotive and energy) and future innovations will fuse together
                the digital, physical, and biological.
              </h2>
            </div>
          </div>

          <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 ">
            <div>
              <img
                src={itimg1}
                className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-72 md:h-48 lg:h-72 object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">
                Hyper-convergence
              </h1>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl">
                Hardware and software are being brought closer together,
                traditional industries are blurring their boundaries (e.g.,
                automotive and energy) and future innovations will fuse together
                the digital, physical, and biological.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
