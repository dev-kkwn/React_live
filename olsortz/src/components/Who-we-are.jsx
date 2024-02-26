import Section1 from "./Home";

function Whoweare() {
    return (
        <>
            <div>
                <div id="sec1" className="container h-[450px] md:h-[600px] lg:w-full">
                    <div className="absolute">
                        <img
                            src={"https://jungleworks.com/wp-content/uploads/2020/07/Untitled-design-52.jpg"}
                            className="mainblur h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
                            alt=""
                        />
                    </div>
                    <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
                        <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px] uppercase">
                            who we are
                        </h1>
                        <p className="text-sm w-auto mt-4 mb-8 md:text-xl md:mt-7 md:mb-10 md:w-[408px] xl:text-xl xl:w-[430px] xl:mt-8">
                            <span className="text-2xl font-medium lg:block">At OLSORTZ,</span> we're in the business
                            of enhancing life's possibilities.
                        </p>
                        <div className="flex">
                            <div className="border border-black w-max m-3 ml-0 p-3 rounded-l-2xl hover:backdrop-blur-2xl hover:bg-white/30">
                                <p className="text-xl font-medium">this is a button</p>
                            </div>
                            <div className="border border-black w-max m-3 ml-0 p-3 rounded-r-2xl  hover:backdrop-blur-2xl hover:bg-white/30">
                                <p className="text-xl font-medium">contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whoweare;