import { useState,useRef } from "react";




export default function Form() {
  const para = useRef("");
  const [desc, setDesc] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // setisLoading(true);
    fetch(`https://grant-finder-api.onrender.com/getGpt`, {
      method: "POST",
      body: JSON.stringify({
        desc: para.current.value.trim(),
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
  
        return;
      });
  };

  return (
    <>
      <form class="flex flex-col items-center justify-center w-[40vw]">
        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Describe your project breifly</label>
        <textarea id="message" rows="4" ref={para} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe..." required></textarea>
        <button onClick={(e) => { handleSubmit(e) }} class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}

