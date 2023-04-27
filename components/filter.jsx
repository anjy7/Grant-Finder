"use client"
import { Cagliostro } from "next/font/google";
import { useEffect, useState } from "react";
import React from "react";

function Filter({ data,filterItem, filtered, setFiltered, activeCat, setActiveCat, setActiveOption, activeOption, activeType, setActiveType, activeEcosystem, setActiveEcosystem }) {
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

  // useEffect(() => {
  //   console.log("oooooo", filtered);
  //   console.log("================", activeOption);
  //   filterItem(activeOption);
  //   console.log("after", filtered);
  // }, [activeOption])

  // console.log("active!!!!", activeOption);

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

  

  // };


  let category = ["Communities", "DeFi", "Derivatives", "DEX", "EVM Compatible", "GameFi", "Grants", "Infrastructure",
    , "Inter-operability", "Layer 1", "Layer 2", "Lend/Borrow", "NFT", "NFT Marketplace", "Oracle", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming"];

  let type = ["Analytics", "Art", "Community","Content", "Design", "Development","Research", "Writing", "Other",];

  let ecosystem = ["Aurora", "Avalanche", "Bitcoin", "BNB", "Celo", "Cosmo Hub", "Ethereum", "Evmos", "Fantom", "Gnosis", "Harmony", "Internet Computer", "Katlyn", "NEAR Protocol", "Optimism", "Polygon", "Solana", "Stacks"];

  return (
    <div className="ml-[4rem] w-2/3 sm:ml-16">
      <div className="text-black flex  mb-5 mt-5 justify-center w-full">
        
        <div className="">

          {
            category?.map((x) => {
              return (
                <button
                  onClick={(e) => {

                    if (activeOption?.includes(`${x}`)) {

                      activeOption.splice(activeOption.indexOf(`${x}`), 1);
                      console.log("1010100101", activeOption);
                      let yo = activeOption;
                      activeCat.splice(activeCat.indexOf(`${x}`), 1)

                      if (activeOption.length == 0) {
                        setFiltered(data);
                        return;
                      }
                      // console.log("Calling function");
                      // console.log(yo)
                      filterItem(yo);
                      // console.log("Called function");
                    }
                    else {
                      let arr = activeOption;
                      let arr2 = activeCat;
                      arr2.push(x);
                      arr.push(x);
                      // console.log("-------------------",activeCat);
                      filterItem(arr);
                      // setActiveOption(prev => [...prev, `${x}`])
                    }
                  }
                  }
                  className={ `${activeOption?.includes(`${x}`) ? "bg-[#6947BD] text-gray-600" : "bg-black"} : ml-2 mt-1 mb-1 min-w-[12.6rem]  rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]`}
                >
                  {/* <div class={`${h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]}`}> */}
                  <div className={ `${activeOption?.includes(`${x}`) ? "bg-[#6947BD] bg-opacity-50" : "bg-black"} : h-full w-full rounded-xl text-white`}>
                    {x}
                  </div>
                </button>

              )
            }
            )}
        </div>
      </div>

      


      
      <div className="text-black flex mb-10 mt-5 align-center justify-center w-full  ">
        <div className="">

          {
            type?.map((x) => {
              return (
                <button
                  onClick={(e) => {
                    // if (activeOption?.includes(`${x}`)) {
                    //   setActiveOption(activeOption.splice(activeOption.indexOf(`${x}`), 1));
                    // }
                    if (activeOption?.includes(`${x}`)) {
                      // setActiveOption(activeOption.splice(activeOption.indexOf(`${x}`), 1));
                      activeOption.splice(activeOption.indexOf(`${x}`), 1);
                      // console.log("1010100101", activeOption);
                      let yo = activeOption;
                      activeType.splice(activeType.indexOf(`${x}`), 1)
                      // setActiveOption(yo);
                      // setActiveCat(yo);
                      if (activeOption.length == 0) {
                        setFiltered(data);
                        return;
                      }
                      // const newItem = data.filter((newVal) => {
                      //   return activeOption.includes(newVal.type || newVal.category);
                      // });
                      // setFiltered(newItem);
                      filterItem(yo);
                      // console.log("clickeddd----------------------",newArray);
                      // setFiltered(newArray);
                    }
                    else {
                      let arr = activeOption;
                      let arr2 = activeType;
                      arr2.push(x);
                      arr.push(x);
                      filterItem(arr);
                      // console.log("clickeddd----------------------",newArray);
                      // setFiltered(newArray);
                      
                    }
                  }
                  }
                  className="ml-2 mt-1 mb-1 min-w-[12.6rem] rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]"
                >
                  <div className={ `${activeOption?.includes(`${x}`) ? "bg-[#6947BD] bg-opacity-50" : "bg-black"} : h-full w-full rounded-xl text-white`}>
                    {x}
                  </div>
                </button>

              )
            }
            )}


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
