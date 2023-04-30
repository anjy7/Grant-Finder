import { useState, useRef, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
// import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

function scrollToBottom() {
  const startTime = performance.now();
  const duration = 1000; // 2 seconds
  const start = window.pageYOffset;
  const end = 1030;

  function step(timestamp) {
    const progress = Math.min(1, (timestamp - startTime) / duration);
    const ease = 0.5 - (0.5 * Math.cos(Math.PI * progress));
    window.scrollTo(0, start + ease * (end - start));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}


export default function Form({ setActiveOption, filterItem, setFilters }) {
  let [obj, setObj] = useState({ choices: [] });
  const [desc, setDesc] = useState()
  const [loading, setLoading] = useState(false);

  let category = ["Communities", "DeFi", "Derivatives", "DEX", "EVM Compatible", "GameFi", "Grants", "Infrastructure",
    , "Inter-operability", "Layer 1", "Layer 2", "Lend/Borrow", "NFT", "NFT Marketplace", "Oracle", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming"];

  let type = ["Analytics", "Art", "Community", "Content", "Design", "Development", "Research", "Writing", "Other",];


  const getRes = (e) => {
    e.preventDefault()
    setLoading(true)
    let prom = `Read the project description given below and tell me in which of the following categories does it fall in, it can fall in more than one category. Answer only in a python list format. The categories are "Communities", "DeFi", "Derivatives", "DEX", "EVM Compatible", "GameFi", "Infrastructure",
    , "Inter-operability", "Layer 1", "Layer 2", "Lend/Borrow", "NFT", "NFT Marketplace", "Oracle", "Social", "Social Causes",
    "Stablecoin", "Staking", "Yield Farming".`
    // console.log(desc)
    let payload = {
      prompt: prom + desc,
      temperature: 0,
      model: "text-davinci-003"
    }
    // setLoading(true);
    console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY)
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
      }
    })
      .then((res) => {
        setLoading(false)
        scrollToBottom();
        // console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        // setLoading(false);
        // console.log(e.message, e);
      });
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      // setLoading(false);
    }
  };

  // this is where object changes
  useEffect(() => {
    let asdf = obj.choices[0]?.text.trim("\n\n")
    let a = asdf?.substring(1, asdf.length - 1);
    if (a) {
      let lis = a.split(",")
      for (let i = 0; i < lis.length; i++) {
        lis[i] = lis[i].trim();
        lis[i] = lis[i].replace(/^"(.*)"$/, '$1');
      }
      if (lis[lis.length - 1] == "") {
        lis.splice(-1)
      }
      // console.log(lis)
      setActiveOption(lis);
      filterItem(lis);
      setFilters(true)
      // refreshData(router, path);
    }
  }, [obj])

  const para = useRef("");

  return (
    <>
      {loading
        ?
        <div className="flex items-center justify-center flex-col min-w-[10rem] min-h-[10rem] sm:min-w-[15rem] sm:min-h-[15rem]">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
            >
          </div>
        </div>

        :
        <form className="flex flex-col items-center justify-center min-w-[25vw]">
          <textarea id="message" rows="4" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="block p-2.5 w-full focus:outline-none min-h-[10rem] max-h-80  text-sm text-white border-none bg-white bg-opacity-10 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600" placeholder="Describe..." required></textarea>
          <button onClick={(e) => getRes(e)} className="mt-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      }
    </>
  )
}

