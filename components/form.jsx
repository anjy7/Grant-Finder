import { useState,useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

export default function Form() {
  let [obj, setObj] = useState({ choices: [] });
  // const configuration = new Configuration({
  //   organization: "org-tBuzVnJ4g5oCThOoLUXr5JJx",
  //   apiKey: "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",
  // });
  // const openai = new OpenAIApi(configuration);

  // const getRes = async () => {
  //    const res = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: "Say this is a test",
  //     max_tokens: 7,
  //     temperature: 0,
  //   });

  //   console.log(response.data.choices[0].text);
  // }

  const [payload, setPayLoad] = useState({
    prompt: `Read the project description given below and tell me in which of the following categories does it fall in, it can fall in more than one category. Answer only in a python list format. The categories are "AI", "Bridges/Interoperability", "CEX", "Communities", "Content", "DeFi", "Derivatives", "DEX", "EVM Compatible","Foundation", "GameFi", "Grants", "Index", "Infrastructure", "Insurance","Inter-operability", "IOT", "Layer 1", "Layer 2", "Lend/Borrow", "Metagovernance", "Music", "NFT", "NFT Marketplace", "Oracles", "Privacy", "Protocal DAO", "Quadratic Funding", "Research", "Social", "Social Causes", "Stablecoin", "Staking", "Yield Farming".As an advanced network with cross-chain interoperability, the Flare blockchain provides the assurance for a completely decentralized future of cross-chain technologies. Flare blockchain qualifies as one of the interesting crypto web3 projects for achieving cross-chain interoperability with better advantages than existing alternatives. At the same time, Flare blockchain also features a detailed incentive program for developers, which can help in supporting the growth of the ecosystem. The facility of a simple and coherent stack of applications for ensuring decentralized interoperability helps in resolving different concerns for web3 developers. For example, The State Connector could help dApps on the Flare blockchain in accessing information from external sources.`,

    temperature: 0.5,
    n: 1,
    model: "text-davinci-002"
  });

  const getRes = () => {
    // setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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"
      }
    })
      .then((res) => {
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        // setLoading(false);
        console.log(e.message, e);
      });
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      // setLoading(false);
    }
  };

  console.log(obj)

  const para = useRef("");
  // const [desc, setDesc] = useState()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  //   // setisLoading(true);
  //   fetch(`https://grant-finder-api.onrender.com/getGpt`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       desc: para.current.value.trim(),
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     cache: "no-store",
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data)
  
  //       return;
  //     });
  // };

  return (
    <>
      <form class="flex flex-col items-center justify-center w-[40vw]">
        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Describe your project briefly</label>
        <textarea id="message" rows="4" ref={para} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe..." required></textarea>
        <button onClick={getRes} class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}

