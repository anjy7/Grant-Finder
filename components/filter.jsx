"use client"
import { Cagliostro } from "next/font/google";
import { useEffect, useState } from "react";
import React from "react";

function Filter({ data, filtered, setFiltered, activeCat, setActiveCat, setActiveOption, activeOption, activeType, setActiveType, activeEcosystem, setActiveEcosystem}) {
  // useEffect(() => {
  //   if (activeOption.length == 0 && activeEcosystem.length == 0 && activeType.length == 0) {
  //     // setFiltered(filtered);
  //     return;
  //   }
  //   // let final = filtered.filter((card) => card.project === activeEcosystem);
  //   // let final = filtered.filter((card) => card.type.toLowerCase() === activeType.toLowerCase());
  //   let final = filtered.filter((card) => activeType.includes(card.type));
  //   // final = final.filter((card) => card.type === activeType);
  //   setFiltered(final);
  // }, [filtered,activeType]);

  // console.log("category",activeOption);
  // console.log("type",activeType);
  // console.log("ecosystem",activeEcosystem);
  // console.log("hey",activeOption.length);
  // console.log("yoyo")

  useEffect(() => {
    console.log("oooooo", filtered);
    console.log("================", activeOption);
    filterItem(activeOption);
    console.log("after",filtered);
  }, [activeOption])

  console.log("active!!!!", activeOption);

  // const filterItem = (curcats) => {
  //   if (activeOption.length == 0) {
  //     return;
  //   }
  //   const newItem = filtered.filter((newVal) => {
  //     return curcats.includes(newVal.type);
  //     // checking if the category matches any of the categories in the array
  //   });
  //   setFiltered(newItem);
  // };

  const filterItem = (curcats) => {
    if (curcats.length == 0) {
      setFiltered(data);
      return;
    }
    const newItem = data.filter((newVal) => {
      // checking if all properties match for each object in curcats array
      //  curcats.map((curcat) => {
      //   console.log("inside cur cat!!!",curcat)
      //   // return Object.keys(curcat).every((prop) => {
      //   //   console.log("inside cur cat!!!",prop)
      //   //   console.log("pusssy",curcat)
      //   //   console.log("pusssy",curcat[0])
      //   //   console.log("heyeyy",curcat[prop]);
      //   //   console.log("wassun",newVal.type.toString() == "Development");
      //   //   console.log("wassun",curcat[prop],newVal.type.toString() == curcat[prop]);
      //     console.log(((newVal.category == (curcat)) || (newVal.type.valueOf() === (curcat)) || (newVal.category == (curcat))))
      //     return ((newVal.category == (curcat)) || (newVal.type == (curcat)) || (newVal.category == (curcat)));
      console.log("activeType",activeType)
if(!curcats.includes(newVal.tags) && activeType.length == 0){
  console.log("inside 1")
  return curcats.includes(newVal.type);
}
else if(!curcats.includes(newVal.type) && activeCat.length == 0){
  console.log("inside 2")
  
  return curcats.includes(newVal.tags[0]);
}
console.log("hoeneue")
console.log(newVal);
console.log(curcats.includes(newVal.type));
console.log(curcats.includes(newVal.tags));
      return ((curcats.includes(newVal.type) && curcats.includes(newVal.tags)) )
        });
        console.log("new",newItem);
        setFiltered(newItem);
      };
    
  // };
  

  let category = ["AI", "Bridges/Interoperability", "CEX", "Communities", "Content", "DeFi", "Derivatives", "DEX", "EVM Compatible","Foundation", "GameFi", "Grants", "Index", "Infrastructure",
    "Insurance","Inter-operability", "IOT", "Layer 1", "Layer 2", "Lend/Borrow", "Metagovernance", "Music", "NFT", "NFT Marketplace", "Oracles", "Privacy", "Protocal DAO", "Quadratic Funding", "Research", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming"];

  let type = ["Analytics" , "Art", "Community","Design", "Development", "Education", "gaming" , "Research", "Tooling",  "Writing", "Other"];

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
                  // if (activeOption?.includes(`${x}`)) {
                  //   setActiveOption(activeOption.splice(activeOption.indexOf(`${x}`), 1));
                  // }
                  if (activeOption?.includes(`${x}`)) {
                    // setActiveOption(activeOption.splice(activeOption.indexOf(`${x}`), 1));
                    console.log("999999999999999999999999999", activeOption.splice(activeOption.indexOf(`${x}`), 1));
                    console.log("1010100101", activeOption);
                    let yo = activeOption;
                    setActiveOption(yo);
                    setActiveCat(yo);
                    if (activeOption.length == 0) {
                      setFiltered(data);
                      return;
                    }
                    // const newItem = data.filter((newVal) => {
                    //   return activeOption.includes(newVal.type || newVal.category);
                    // });
                    // setFiltered(newItem);
                    filterItem(activeOption);
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
                  if (activeOption?.includes(`${x}`)) {
                    // setActiveOption(activeOption.splice(activeOption.indexOf(`${x}`), 1));
                    console.log("999999999999999999999999999", activeOption.splice(activeOption.indexOf(`${x}`), 1));
                    console.log("1010100101", activeOption);
                    let yo = activeOption;
                    setActiveOption(yo);
                    setActiveType(yo);
                    if (activeOption.length == 0) {
                      setFiltered(data);
                      return;
                    }
                    // const newItem = data.filter((newVal) => {
                    //   return activeOption.includes(newVal.type) || activeOption.includes(newVal.category) ;
                    // });
                    // setFiltered(newItem);
                      filterItem(activeOption);
                  }
                  else {
                    setActiveOption(prev => [...prev, `${x}`])
                  }

                }
                }
                className={`${activeOption?.includes(`${x}`) ? "bg-black text-gray-600" : "bg-brown-500"}    text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
              >
                {x}
              </button>)
            })
          }


        </div>
      </div>
{/* 
      <div className="text-black flex mb-5 mt-5 align-center w-[60rem">
        <h1>Ecosystem</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">


          {
            ecosystem?.map((x) => {
              return (<button
                onClick={() => {
                  if (activeOption?.includes(`${x}`)) {
                    // setActiveOption();
                    console.log("999999999999999999999999999", activeOption.splice(activeOption.indexOf(`${x}`), 1));
                  }
                  else {
                    setActiveOption(prev => [...prev, `${x}`])
                  }
                }
                }
                className={`${activeOption?.includes(`${x}`) ? "bg-black text-gray-600" : "bg-purple-500 "}   text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
              >
                {x}
              </button>)
            })
          }

        </div>
      </div> */}
    </div>
  );
}

export default Filter;
