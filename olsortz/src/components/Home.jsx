import React from "react";
import sec1banner from "../assert/sec-1-banner.jpg";
import aboutimg1 from "../assert/home-about-img1.jpg";
import benefitsimg from "../assert/home-benefit-img.jpg";
import futureimg from "../assert/home-future-img.jpg";
import impimg from "../assert/home-import-img.jpg";
import goldimg from "../assert/home-gold-img.jpg";
import fcimg from "../assert/home-fc-img.jpg";
import solarimg from "../assert/home-solar-img.jpg";
import lubeimg from "../assert/home-lube-img.jpg";
import itimg from "../assert/home-it-img.jpg";
import realestateimg from "../assert/home-realestate-img.jpg";
import foodimg from "../assert/home-food-img.jpg";
import { FaArrowRight } from "react-icons/fa";

function Section1() {
  return (
    <section>
      <div id="sec1" className="container h-[450px] md:h-[520px] xl:h-[600px]">
        <div className="absolute">
          <img
            src={sec1banner}
            className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500 rounded-b-[25px] md:rounded-b-[50px]"
            alt="providing energy solutions"
          />
        </div>
        <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
          <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px]">
            PROVIDING ENERGY SOLUTIONS
          </h1>
          <p className="text-sm w-auto mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8">
            <span className="lg:block">At OLSORTZ,</span> we're in the business
            of enhancing life's possibilities.
          </p>
          <a href={'/'} className="border mt-9 p-2 text-sm md:text-lg xl:text-xl">
            SEE HOW WE DO IT{" "}
            <span className="h-2 p-1 rounded-md ml-4">1234</span>
          </a>
          {/* <div className="flex justify-around items-center border mt-9 p-2 text-sm md:text-lg xl:text-xl">
            <p className="uppercase">see how we do it</p>
            <FaArrowRight /> className="ml-3 backdrop-filter-none"/>
          </div> */}
        </div>
      </div>

      <div id="sec2" className="p-5">
        <div className="flex  flex-wrap">
          <div className="order-1 lg:order-1 h-auto w-full lg:w-1/2 text-start justify-start p-4">
            <p className="text-blue-400 text-md my-5 mb-6 xl:text-xl xl:mt-16">
              <span className=""> - </span> ABOUT US <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
              OIL & GAS INNOVATORS: DRIVING PROGRESSN IN THE INDUSTRY
            </h1>
            <p className="text-md my-6 text-start xl:text-xl xl:mb-9">
              From exploration and production to transportation and refining, we
              offer a wide range of products and services that meet the unique
              needs of the oil & gas industry. Our commitment to excellence and
              customer satisfaction is reflected in our rigorous quality control
              processes.
            </p>
            <a href={'/'} className="text-xl xl:text-3xl ">
              Learn More +
            </a>
          </div>
          <div className="p-5 order-2 lg:order-2 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={aboutimg1}
              className="md:rounded-3xl lg:rounded-se-full object-cover "
              alt="power & future"
            />
          </div>
        </div>
      </div>

      <div id="sec3" className="p-5 bg-black text-white">
        <div className="flex  flex-wrap">
          <div className="p-5 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={futureimg}
              className="md:rounded-3xl object-cover "
              alt="banner-3"
            />
          </div>
          <div className="h-auto w-full lg:w-1/2 text-start justify-start p-4">
            <p className="text-blue-400 text-md my-5 mb-6 xl:text-xl xl:mt-7">
              <span className=""> - </span> OUR ACHIEVEMENTS <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl"> POWERING YOUR FUTURE </h1>
            <p className="text-md my-6 text-start xl:text-xl xl:mb-9"> With cutting-edge technology and unparalleled expertise, we've propelled your future forward by delivering reliable, sustainable power solutions tailored to your needs. Our commitment to innovation and efficiency ensures that we remain at the forefront of powering your journey towards success. Trust us to illuminate your path, energizing every step of the way. </p>
            <a href={'/'} className="text-xl xl:text-3xl "> Learn More + </a>
          </div>

        </div>
      </div>

      <div id="sec4" className="p-5">
        <div className="flex  flex-wrap">
          <div className="p-5 order-2 lg:order-2 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={benefitsimg}
              className="md:rounded-3xl lg:rounded-ee-full object-cover "
              alt="benefits"
            />
          </div>
          <div className="order-1 lg:order-1 h-auto w-full lg:w-1/2 text-start justify-start p-4">
            <p className="text-blue-400 text-md my-5 mb-6 xl:text-xl xl:mt-12 ">
              <span className=""> - </span> OUR BENEFITS <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
              THE FUTURE OF OIL & GAS IS HERE
            </h1>
            <p className="text-md my-6 text-start xl:text-xl xl:mb-9">
              The future of oil and gas brings with it unparalleled advancements in efficiency and sustainability. With cutting-edge technologies, we harness cleaner extraction methods, minimizing environmental impact. Enhanced data analytics optimize operations, ensuring safer and more cost-effective production. Embracing innovation, the future of oil and gas propels us towards a more sustainable energy landscape.
            </p>
            <a href={'/'} className="text-xl xl:text-3xl ">
              Learn More +
            </a>
          </div>
        </div>
      </div>

      <div id='sec5' className="bg-black text-white py-8">
        <div className="text-center pt-5">
          <p className="text-blue-400 md:text-lg lg:text-xl mb-6"> <span > - </span> SERVICES WE PROVIDE <span> - </span> </p>
          <h1 className="text-white md:text-xl lg:text-2xl xl:text-4xl font-bold">INNOVATING FOR A SUSTAINABLE TOMORROW IN SERVICES WE PROVIDE </h1>
        </div>
        <div className="flex flex-wrap gap-7 w-full justify-center pl-10 pt-10 pr-10 pb-4">

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={impimg} alt="import & export" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">IMPORT AND EXPORT</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={goldimg} alt="gold & precious metals" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7"> GOLD & PRECIOUS METALS </h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={foodimg} alt="food & beverages" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">FOOD & BEVERAGES</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={itimg} alt="information technology" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col p-6 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">INFORMATION TECHNOLOGY</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={fcimg} alt="financial consultancy" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">FINANCIAL CONSULTANCY</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={realestateimg} alt="olsortz" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">REAL ESTATE CONSULTANCY </h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={solarimg} alt="solar technologies" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">SOLAR TECHNOLOGIES</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>

          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-96 w-full object-cover" src={lubeimg} alt="petrochemicals & lubricants" />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">PETROCHEMICALS & LUBRICANTS</h1>
                <a href={'/'} class=" text-white text-lg font-light mb-5">Learn More +</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm font-bold p-7 pb-10">
          <a href="" className="border border-white p-3 border-800 hover:bg-black transition-all duration-300"> DISCOVER OUR SERVICES </a>
        </div>
      </div>
    </section>
  );
}

export default Section1;
