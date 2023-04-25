"use client"
import { Cagliostro } from "next/font/google";
import { useEffect } from "react";
import React from "react";

function Filter({ filtered , setFiltered, setActiveOption, activeOption, activeType, setActiveType, activeEcosystem, setActiveEcosystem }) {
    // useEffect(() => {
    //   if (activeOption === "all") {
    //     setFiltered(resources);
    //     return;
    //   }
    //   const filtered = resources.filter((card) => card.genre === activeOption);
    //   setFiltered(filtered);
    // }, [activeOption, resources]);
  console.log("category",activeOption);
  console.log("type",activeType);
  console.log("ecosystem",activeEcosystem);
  // console.log("hey",activeOption.length);
  console.log("yoyo")

  let category = ["AI", "Analytics", "Bridges/Interoperability", "CEX", "Communities", "Content", "DeFi", "Derivatives", "DEX", "Foundation", "GameFi", "Grants", "Index", "Infrastructure",
    "Insurance", "IOT", "Layer 1", "Layer 2", "Lend/Borrow", "Metagovernance", "Music", "NFT", "Oracles", "Privacy", "Protocal DAO", "Quadratic Funding", "Research", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming"];

  let type = ["Analytics", "Community", "Development", "Other"];

  let ecosystem = ["Aurora", "Avalanche", "Bitcoin", "BNB", "Celo", "Cosmo Hub", "Ethereum", "Evmos", "Fantom", "Gnosis", "Harmony", "Internet Computer", "Katlyn", "NEAR Protocol", "Optimism", "Polygon", "Solana", "Stacks"];

  return (
    <div className="w-2/3 m-auto">
      <div className="text-black flex  mb-5 mt-5 align-center w-[60rem">
        <h1>Project Category</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">

          {
            category?.map((x) => {
              return (<button
                onClick={() => {
                  if (activeOption?.includes(`${x}`)) {
                    activeOption.splice(activeOption.indexOf(`${x}`), 1);
                  }
                  else {
                    setActiveOption(prev => [...prev, `${x}`])
                  }
                }
                }
                className={`${activeOption?.includes(`${x}`) ? "bg-black text-gray-600" : "bg-indigo-800 "}  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
              >
                {x}
              </button>)
            })
          }

        </div>
      </div>

      <div className="text-black flex mb-5 mt-5 align-center w-[60rem">
        <h1>Grants Type</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">

          {
            type?.map((x) => {
              return (<button
                onClick={() => {
                  if (activeType?.includes(`${x}`)) {
                    activeType.splice(activeType.indexOf(`${x}`), 1);
                  }
                  else {
                    setActiveType(prev => [...prev, `${x}`])
                  }
                }
                }
                className={`${activeType?.includes(`${x}`) ? "bg-black text-gray-600" : "bg-brown-500"}    text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
              >
                {x}
              </button>)
            })
          }


        </div>
      </div>

      <div className="text-black flex mb-5 mt-5 align-center w-[60rem">
        <h1>Ecosystem</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">


          {
            ecosystem?.map((x) => {
              return (<button
                onClick={() => {
                  if (activeEcosystem?.includes(`${x}`)) {
                    activeEcosystem.splice(activeEcosystem.indexOf(`${x}`), 1);
                  }
                  else {
                    setActiveEcosystem(prev => [...prev, `${x}`])
                  }
                }
                }
                className={`${activeEcosystem?.includes(`${x}`) ? "bg-black text-gray-600" : "bg-purple-500 "}   text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
              >
                {x}
              </button>)
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Filter;
