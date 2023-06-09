"use client"

import Cards from "./cards";
import Filter from "./filter";
import { useState, useEffect } from "react";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Main({ data,activeOption,setActiveOption,filterItem
    ,filtered 
    ,setFiltered 
    ,activeCat 
    ,setActiveCat
    ,activeType   
    ,setActiveType
    ,filters
    ,setFilters
}) {

    const [q, setQ] = useState("");

    const [activeEcosystem, setActiveEcosystem] = useState([]);
    const [searchParam] = useState(["project"]);
    const [searchParam2] = useState(["category"]);
    // const [howMany, setHowMany] = useState();


    useEffect(() => {
        // console.log(filtered);
    }, [filtered])

    let howMany = 0;

    function search(items) {
        // console.log(items)
        let filtItems = items?.filter((item) => {
            return (searchParam).some((newItem) => {
                return (
                    item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                );
            });
        }
        );
        howMany = filtItems?.length;
        return filtItems
    }

    const filtData = search(filtered)

    return (

        <div className="flex items-center justify-center flex-col overflow-x-hidden bg-[#090A0D] mb-10">
            <div className="flex flex-row">
                <div className="text-white align-center flex rounded-3xl bg-[#2c1f76] mx-3 px-3">
                    <text className="my-auto">{howMany}</text>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="bg-opacity-10 focus:outline-none placeholder-white block md:w-[50rem] p-4 pl-10 text-sm text-white border border-gray-300 rounded-[15rem] bg-gray-50 dark:bg-gray-700 border-none dark:border-gray-600 dark:placeholder-white dark:text-white"
                        value={q}
                        placeholder={`Search Grants`}
                        onChange={(e) => {
                            setQ(e.target.value);
                        }}
                        onKeyDown={e => {
                            if (e.key === "Escape") {
                                setQ("")
                            }
                        }}
                    />
                </div>
            </div>
            <div>
                {
                    filters ?
                        <div className="flex flex-col justify-center items-center mt-3">
                            <button
                                onClick={() => {
                                    setFilters((prev) => !prev)
                                }}
                                className="flex flex-col justify-center items-center">
                                <div className="mt-4 mb-2 text:6xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#281E87] to-[#6947BD] bg-clip-text text-transparent">
                                    FILTERS
                                </div>
                                <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 text-white transition-transform ${filters ? "rotate-180" : ""
                                }`}
                                
                        />
                            </button>
                            <div className="flex justify-center">
                                <Filter
                                    data={data}
                                    filterItem={filterItem}
                                    filtered={filtered}
                                    setFiltered={setFiltered}
                                    activeCat={activeCat}
                                    setActiveCat={setActiveCat}
                                    activeOption={activeOption}
                                    setActiveOption={setActiveOption}
                                    activeType={activeType}
                                    setActiveType={setActiveType}
                                    activeEcosystem={activeEcosystem}
                                    setActiveEcosystem={setActiveEcosystem}
                                />
                            </div>
                        </div>
                        :
                        <button
                            onClick={() => {
                                setFilters((prev) => !prev)
                            }}
                            className="flex flex-col justify-center items-center mb-14 mt-3">
                            <div className="mt-4 mb-2 text:6xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#281E87] to-[#6947BD] bg-clip-text text-transparent">
                                FILTERS
                            </div>
                            <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 text-white transition-transform ${filters ? "rotate-180" : ""
                                }`}
                        />
                        </button>
                }
            </div>
            <div>
                <Cards data={filtData}/>
            </div>
        </div>

    );
}