import { FaInstagram, FaServicestack } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdContactPage, MdGroups2 } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

function Nav() {
    return (
        <>
            <div className="flex items-center justify-between p-1 bg-black text-white">
                <div className="max-w-max">
                    <h1 className=" p-3 text-3xl capitalize">main logo</h1>
                </div>
                <div className="flex justify-evenly w-3/4 text-white lg:w-2/4">
                    <div className="flex justify-center items-center">
                        <IoHomeOutline />
                        <h1 className="ml-1 capitalize">home</h1>
                    </div>
                    <div className="dropdown">
                        <div className="flex justify-center items-center">
                            <div className="flex items-center">
                                <FaServicestack />
                                <h1 className="ml-1 capitalize">services</h1>
                            </div>
                            <div className="mt-1">
                                <RiArrowDropDownLine className="text-xl" />
                            </div>
                        </div>
                        <div className="dropdown-content">
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                            <h1 className="dropdown-list m-1 p-1">services</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        < MdGroups2 className="text-xl" />
                        <h1 className="ml-1 capitalize">who&nbsp;are&nbsp;we</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <IoInformationCircleOutline className="text-xl" />
                        <h1 className="ml-1 capitalize">about</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <MdContactPage className="text-lg" />
                        <h1 className="ml-1 capitalize">contact</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav