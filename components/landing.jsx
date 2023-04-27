"use client"
import { useState } from "react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";
import Form from "./form";

export default function Landing({ setActiveOption, filterItem, setFilters }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(prev => !prev);
    return (

        <div className="bg-[#090A0D]  text-white  min-w-full min-h-fit p-20 flex justify-center items-center flex-col">

            <div className="bg-[#4628B4] relative flex flex-col justify-center items-center w-4/6 rounded-xl py-5 bg-opacity-10">
                <div className="bg-gradient-to-r min-w-52  from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px] text-4xl font-extrabold rounded-[20rem] flex items-center gap-3 cursor-pointer"
                    onClick={() => closeMenu()}>
                    <div className="bg-black h-full w-full rounded-[20rem] text-white flex  items-center justify-center  gap-3 py-3 px-5 ">

                       

                        Get Help
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                       
                    </div>
                    
                </div>
                <div className="text-center mt-2">
                        Welcome!! <br />If you are a web3 startup or an individual having a project idea needing AI assistance or advice with grants please fill up this form.
                    </div>
                <div>
                    {isMenuOpen ?
                        <div className="flex flex-col h-[30rem]">
                            
                            <div className="flex ">

                                <div className="absolute top-44 left-16 w-30">

                                    <Form setActiveOption={setActiveOption} filterItem={filterItem} setFilters={setFilters} />
                                </div>

                                <img src="/robot.png" className="invisible  lg:visible absolute h-[30rem] w-96 bottom-0 right-0" />
                            </div>
                        </div>
                        : null

                    }
                </div>

            </div>
        </div>
    )
}