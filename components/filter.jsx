import { useEffect } from "react";
import React from "react";

function Filter({ resources, setActiveOption, setFiltered, activeOption }) {
  //   useEffect(() => {
  //     if (activeOption === "all") {
  //       setFiltered(resources);
  //       return;
  //     }
  //     const filtered = resources.filter((card) => card.genre === activeOption);
  //     setFiltered(filtered);
  //   }, [activeOption, resources]);

  return (
    <div className="w-2/3 m-auto">
      <div className="text-black flex  mb-5 mt-5 align-center w-[60rem">
        <h1>Project Category</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">

          <button
            onClick={() => setActiveOption("Content")}
            className={`${activeOption === "Content" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveOption("DeFi")}
            className={`${activeOption === "DeFi" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            DeFi
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Derivatives
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            DEX
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Grants
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            IOT
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Layer 1
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Layer 2
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            NFT
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Lend/Borrow
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Music
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Staking
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Stablecoin
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-indigo-800  text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Communities
          </button>

        </div>
      </div>

      <div className="text-black flex mb-5 mt-5 align-center w-[60rem">
        <h1>Grants Type</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">

          <button
            onClick={() => setActiveOption("Content")}
            className={`${activeOption === "Content" ? "bg-slate-300 text-gray-600" : ""} bg-brown-500 w-fit text-white p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveOption("DeFi")}
            className={`${activeOption === "DeFi" ? "bg-slate-300 text-gray-600" : ""} bg-brown-500 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Community
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-brown-500 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-brown-500 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-brown-500 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Other
          </button>
        </div>
      </div>

      <div className="text-black flex mb-5 mt-5 align-center w-[60rem">
        <h1>Ecosystem</h1>
        <div className="flex flex-wrap flex-col sm:flex-row	">

          <button
            onClick={() => setActiveOption("Content")}
            className={`${activeOption === "Content" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Aurora
          </button>
          <button
            onClick={() => setActiveOption("DeFi")}
            className={`${activeOption === "DeFi" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Avalanche
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Bitcoin
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            BNB
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Celo
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Cosmo Hub
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Ethereum
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Evmos
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Fantom
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Gnosis
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Harmony
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Intenet Computer
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Klaytn
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            NEAR Protocol
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Optimisim
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Polygon
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Solana
          </button>
          <button
            onClick={() => setActiveOption("github")}
            className={`${activeOption === "github" ? "bg-slate-300 text-gray-600" : ""} bg-purple-900 text-white w-fit p-2 ml-1 mb-2 sm:ml-2 rounded-md border border-gray-300 dark:border-gray-800`}
          >
            Stacks
          </button>

        </div>
      </div>
    </div>
  );
}

export default Filter;
