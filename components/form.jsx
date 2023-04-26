import { useState,useRef, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

export default function Form() {
  let [obj, setObj] = useState({ choices: [] });
  const [desc, setDesc] = useState()
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

  const getRes = (e) => {
    e.preventDefault()
    let prom = `Read the project description given below and tell me in which of the following categories does it fall in, it can fall in more than one category. Answer only in a python list format. The categories are "AI", "Bridges/Interoperability", "CEX", "Communities", "Content", "DeFi", "Derivatives", "DEX", "EVM Compatible","Foundation", "GameFi", "Grants", "Index", "Infrastructure", "Insurance","Inter-operability", "IOT", "Layer 1", "Layer 2", "Lend/Borrow", "Metagovernance", "Music", "NFT", "NFT Marketplace", "Oracles", "Privacy", "Protocal DAO", "Quadratic Funding", "Research", "Social", "Social Causes", "Stablecoin", "Staking", "Yield Farming".`
    console.log(desc)
    let payload = {
      prompt: prom+desc,
      temperature: 0,
      model: "text-davinci-002"
    }
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

  // this is where object changes
  useEffect(()=>{
    let asdf = obj.choices[0]?.text.trim("\n\n")
    let a = asdf?.substring(1, asdf.length - 1);
    if (a) {
      let lis = a.split(",")
      for (let i = 0; i < lis.length; i++) {
        lis[i] = lis[i].trim();
        lis[i] = lis[i].replace(/^"(.*)"$/, '$1');
      }
      console.log(lis)
    }
  }, [obj])

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
        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">We will suggest you grants with the help of AI. Describe your project briefly</label>
        <textarea id="message" rows="4" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe..." required></textarea>
        <button onClick={(e)=>getRes(e)} class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}

