"use client"
import { useState } from "react";
import Landing from "@/components/landing";
import Main from "@/components/main";


export default function Combine({ alldata }) {
    const [activeOption, setActiveOption] = useState([]);
    const data = alldata;

    const [filtered, setFiltered] = useState(data);
    const [activeCat, setActiveCat] = useState([]);
    const [activeType, setActiveType] = useState([]);
    const [filters, setFilters] = useState(false)

    function filterItem(curcats) {
        if (curcats.length === 0) {
            setFiltered(data);
            return;
        }

        const filteredData = data.filter((newVal) => {
            // console.log("newVal", newVal)
            const typeMatch = newVal.type?.some(x => curcats.includes(x));
            // console.log("typeMatch", typeMatch);
            const tagsMatch = newVal.tags?.some(x => curcats.includes(x));
            // console.log("tagsMatch", tagsMatch);

            if (tagsMatch == false && typeMatch == false) {
                return false;
            }

            if (activeType.length == 0) {
                return tagsMatch;
            }
            if (activeCat.length == 0) {
                return typeMatch;
            }
            else {
                return tagsMatch && typeMatch
            }
        });

        setFiltered(filteredData);
    }

    return (
        <>
            <Landing setActiveOption={setActiveOption} filterItem={filterItem} setFilters={setFilters}/>
            <Main data={data} 
            filterItem={filterItem} 
            activeOption={activeOption} 
            setActiveOption={setActiveOption} 
            filtered={filtered} 
            setFiltered={setFiltered} 
            activeCat={activeCat} 
            setActiveCat={setActiveCat}
            activeType={activeType}   
            setActiveType={setActiveType}
            filters={filters}
            setFilters={setFilters}
            />
        </>
    );
}