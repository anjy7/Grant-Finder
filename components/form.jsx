import { useState } from "react";

async function getGpt(desc) {
  const res = await fetch(`https://grant-finder-api.onrender.com/getGptt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode:'no-cors',
    body: JSON.stringify({
      "desc": desc
    }),
    // next: { revalidate: 10 }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res.json())
  return res.json()
}

function submitButton(desc){
  const asdf = getGpt(desc)
  console.log(asdf)
}

export default function Form() {

  const [desc, setDesc] = useState()

  return (
    <>
      <form class="flex flex-col items-center justify-center w-[40vw]">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Describe your project breifly</label>
        <textarea id="message" rows="4" value={desc} onChange={(e) => {setDesc(e.target.value) }} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe..." required></textarea>
        <button onClick={(e) => { e.preventDefault(); submitButton(desc) }} class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}

