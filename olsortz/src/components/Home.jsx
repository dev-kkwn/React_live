import React from "react";
import sec1banner from '../assets/sec-1-banner.jpg';


export default function Section1(){
    return(
        <section className="container h-[450px] md:h-[850px] lg:w-full">
            
            <div className="absolute ">
                <img src={sec1banner} className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500" alt=""/>
            </div>
            <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
                <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px]">
                    PROVIDING ENERGY SOLUCTIONS
                </h1>
                <p className="text-sm w-96 mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8"><span className="lg:block">At OLSORTZ,</span> we're in the business of enhancing life's possibilities.</p>
                <a href="" className="border mt-9 p-2 text-sm md:text-lg xl:text-xl ">SEE HOW WE DO IT <span className="h-2 p-1 bg-white rounded-md ml-4">1234</span></a>
            </div>   
        </section>
    );
}
