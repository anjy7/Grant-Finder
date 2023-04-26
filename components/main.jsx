"use client"

import Cards from "./cards";
import Filter from "./filter";
import { useState, useEffect } from "react";

export default function Main({ data }) {

    const [q, setQ] = useState("");
    const [filtered, setFiltered] = useState(data);
    const [activeOption, setActiveOption] = useState([]);
    const [activeCat, setActiveCat] = useState([]);
    const [activeType, setActiveType] = useState([]);
    const [activeEcosystem, setActiveEcosystem] = useState([]);
    const [searchParam] = useState(["project"]);
    const [searchParam2] = useState(["category"]);
    const [filters, setFilters] = useState(false)

    console.log("data!!!!!!", filtered);
    console.log("all data------------------", data);

    // useEffect(() => {
    //     console.log("first");
    // }, [activeOption])


    function search(items) {
        return items?.filter((item) => {
            return (searchParam).some((newItem) => {
                return (
                    item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
                    -1
                );
            });
        }
        );
    }

    return (

        <div className="flex items-center justify-center flex-col  bg-[#090A0D]">

            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    class="opacity-10 focus:outline-none placeholder-black block w-[50rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={q}
                    placeholder="Search Ecosystem..."
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
            <div>
                {
                    filters ?
                        <div className="flex flex-col justify-center items-center mt-3">
                            <button
                                onClick={() => {
                                    setFilters((prev) => !prev)
                                }}
                                className="flex flex-col justify-center items-center">
                                <div class="mt-4 mb-2 text-5xl font-extrabold bg-gradient-to-r from-[#281E87] to-[#6947BD] bg-clip-text text-transparent">
                                    FILTERS
                                </div>
                                <img src="/Vector.png" className="w-auto h-auto mb-4" />
                            </button>
                            <div className="flex justify-center">
                                <Filter
                                    data={data}
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
                            <div class="mt-4 mb-2 text-5xl font-extrabold bg-gradient-to-r from-[#281E87] to-[#6947BD] bg-clip-text text-transparent">
                                FILTERS
                            </div>
                            <img src="/Vector.png" className="w-auto h-auto" />
                        </button>
                }
            </div>
            <div>
                <Cards data={search(filtered)} />
            </div>
        </div>

    );
}