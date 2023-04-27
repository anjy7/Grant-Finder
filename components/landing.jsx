"use client"
import { useState } from "react";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Form from "./form";

export default function Landing({ setActiveOption, filterItem, setFilters }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(prev => !prev);
    return (

        <div className="bg-[#090A0D] overflow-x-hidden text-white  w-full min-h-fit p-20 flex justify-center items-center flex-col">
                {/* <div className="text-7xl mt-[-2rem] mb-5 font-bold bg-gradient-to-r from-[#281E87] to-[#6947BD] bg-clip-text text-transparent">WEB 3.0 GRANTS</div> */}
                <img src="/heading.svg" className="mb-20"/>
            <div className="bg-[#4628B4] relative flex flex-col justify-center items-center w-72 p-2 md:w-4/6 rounded-xl py-5 bg-opacity-10">
                <div className="bg-gradient-to-r  md:min-w-52  from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px] md:text-3xl font-extrabold rounded-[20rem] flex items-center gap-3 cursor-pointer"
                    onClick={() => closeMenu()}>
                    <div className="bg-black h-full w-full rounded-[20rem] text-white flex  items-center justify-center  gap-3 py-3 px-5 ">

                       

                        Get AI Help
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                       
                    </div>
                    
                </div>
                <div className="text-center mt-2  sm:mb-0 sm:font-semibold">
                    </div>
                <div>
                    {isMenuOpen ?
                        <div className="flex flex-col h-[20rem]">
                            <div className="px-5"><br />We will help you find grants with the help of AI. Please explain your project brefly</div>
                            
                            <div className="flex ">

                                <div className="absolute mt-5 left-16 w-30">

                                    <Form setActiveOption={setActiveOption} filterItem={filterItem} setFilters={setFilters} />
                                </div>

                                <img src="/robot.png" className="invisible  lg:visible absolute h-[20rem] w-[17rem] bottom-0 right-0" />
                            </div>
                        </div>
                        : null

                    }
                </div>

            </div>
        </div>
    )
}