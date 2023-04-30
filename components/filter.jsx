"use client"
import { Cagliostro } from "next/font/google";
import { useEffect, useState } from "react";
import React from "react";

function Filter({ data, filterItem, filtered, setFiltered, activeCat, setActiveCat, setActiveOption, activeOption, activeType, setActiveType, activeEcosystem, setActiveEcosystem }) {

  let category = ["Communities", "DeFi", "Derivatives", "DEX", "EVM Compatible", "GameFi", "Infrastructure",
    , "Inter-operability", "Layer 1", "Layer 2", "Lend/Borrow", "NFT", "NFT Marketplace", "Oracle", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming"];

  let type = ["Analytics", "Art", "Community", "Content", "Design", "Development", "Research", "Writing", "Other",];

  let ecosystem = ["Aurora", "Avalanche", "Bitcoin", "BNB", "Celo", "Cosmo Hub", "Ethereum", "Evmos", "Fantom", "Gnosis", "Harmony", "Internet Computer", "Katlyn", "NEAR Protocol", "Optimism", "Polygon", "Solana", "Stacks"];

  return (
    <div className="ml-[2.2rem]  w-3/4 sm:ml-14">
      <div className="text-black flex  mb-5 mt-5 justify-center w-full">

        <div className="">

          {
            category?.map((x) => {
              return (
                <button
                  key={x}
                  onClick={(e) => {

                    if (activeOption?.includes(`${x}`)) {

                      activeOption.splice(activeOption.indexOf(`${x}`), 1);
                      let yo = activeOption;
                      activeCat.splice(activeCat.indexOf(`${x}`), 1)

                      if (activeOption.length == 0) {
                        setFiltered(data);
                        return;
                      }
                      filterItem(yo);
                    }
                    else {
                      let arr = activeOption;
                      let arr2 = activeCat;
                      arr2.push(x);
                      arr.push(x);
                      filterItem(arr);
                    }
                  }
                  }
                  className={`${activeOption?.includes(`${x}`) ? "bg-[#6947BD] text-gray-600" : "bg-black"} : ml-2 mt-1 mb-1 min-w-[8rem]  rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]`}
                >
                  <div className={`${activeOption?.includes(`${x}`) ? "bg-[#6947BD] bg-opacity-50" : "bg-black"} : h-full w-full rounded-xl text-white px-2 py-[1px]`}>
                    {x}
                  </div>
                </button>

              )
            }
            )}
        </div>
      </div>

      <div className="text-black flex mb-10 mt-5 align-center justify-center w-full lg:ml-[-1.6rem]  ">
        <div className="">

          {
            type?.map((x) => {
              return (
                <button
                  key={x}
                  onClick={(e) => {
                    if (activeOption?.includes(`${x}`)) {
                      activeOption.splice(activeOption.indexOf(`${x}`), 1);
                      let yo = activeOption;
                      activeType.splice(activeType.indexOf(`${x}`), 1)

                      if (activeOption.length == 0) {
                        setFiltered(data);
                        return;
                      }
                      filterItem(yo);
                      // setFiltered(newArray);
                    }
                    else {
                      let arr = activeOption;
                      let arr2 = activeType;
                      arr2.push(x);
                      arr.push(x);
                      filterItem(arr);
                    }
                  }
                  }
                  className="ml-2 mt-1 mb-1 min-w-[8rem] md:min-w-[7rem] rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]"
                >
                  <div className={`${activeOption?.includes(`${x}`) ? "bg-[#6947BD] bg-opacity-50" : "bg-black"} : h-full w-full rounded-xl text-white`}>
                    {x}
                  </div>
                </button>

              )
            }
            )}

        </div>
      </div>
    </div>
  );
}

export default Filter;
