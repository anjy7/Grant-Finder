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

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(prev => !prev);
    return (
        <div className="bg-[#090A0D]  text-white  min-w-full min-h-fit p-20 flex justify-center items-center flex-col">

            <div className="bg-[#090A0D] text-4xl font-extrabold p-4 rounded-lg flex items-center gap-3 cursor-pointer" onClick={() => closeMenu()}>
                Get Help
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                        }`}
                />
            </div>
            {isMenuOpen?<Form/>:null}
        </div>
    )
}