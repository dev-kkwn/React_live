import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className=" bg-black text-white p-5">
                <div className="flex justify-evenly items-center ">

                    <div>
                        <div className="my-4">
                            <h1 className="text-3xl text-center font-medium capitalize">our key contacts</h1>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="text-center w-1/2">
                                <h1 className="uppercase text-xl text-blue-400">Habeeb Al Hafidh</h1>
                                <p>CEO & Managing Director <br />
                                    +966 505924712,
                                    habeeb@olsortz.com <br />
                                    investmentaxis@hotmail.com</p>
                            </div>
                            <div className="text-center w-1/2">
                                <h1 className="uppercase text-xl text-blue-400">Biju Rajan</h1>
                                <p>Executive Director <br />
                                    +966 500064365 <br />
                                    biju@olsortz.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h1 className="capitalize text-center text-3xl font-medium">stay tuned with us</h1>
                        <div className="flex justify-center items-center gap-10 text-3xl my-2 mt-5">
                            <FaInstagram className="text-blue-400" />
                            <FaTwitter className="text-blue-400" />
                            <FaFacebook className="text-blue-400" />
                            <FaYoutube className="text-blue-400" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-3xl">
                    <h1 className="capitalize font-medium">find out our Extensions</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center text-center gap-6 p-4">
                    <div className="w-96 ">
                        <h1 className="text-xl text-blue-400 uppercase ">Saudi Arabia </h1>
                        <p> P.O.Box: 4535 <br />
                            Postal Code: 6689-36344
                            Eastern Province
                            Kingdom of Saudi Arabia. <br />
                            Telefax: +966 013 5974170</p>
                    </div>
                    <div className="w-96">
                        <h1 className="text-xl text-blue-400 uppercase ">U.A.E</h1>
                        <p>P.O.Box 242808 <br />
                            Al Abbas Building
                            Office No.504/ Room 10
                            Bank Street , Burdubai
                            Dubai, UAE <br />
                            Tel: +971 55 159 1288</p>
                    </div>
                    <div className="w-96">
                        <h1 className="text-xl text-blue-400 uppercase ">Bahrain</h1>
                        <p> P.0.Box 5017 <br />
                            Exhibition Road, Manama, Kingdom of Bahrain. <br />
                            Telefax: +973 17292877</p>
                    </div>
                    <div className="w-96">
                        <h1 className="text-xl text-blue-400 uppercase ">India </h1>
                        <p>60/478 2nd Floor,
                            Kolathara Arcade,<br />
                            South Panampilli Nagar,
                            Kochi,India 682036 <br />
                            Ph: +91 9447041889</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <h1 className="capitalize">copyrights are received for this page</h1>
                </div>
            </div>
        </>
    );
}

export default Footer; 