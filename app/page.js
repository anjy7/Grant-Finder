import { Inter } from "next/font/google";
import Combine from "@/components/combine";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  
  const res = await fetch(`${process.env.BACKEND_URL}/findGrants`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    next:{revalidate:60*10}
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  let data = await getData();
  let alldata = data.grants;
  // console.log(alldata)
  

  return (
    <div className="max-w-[100vw] ">
      <Combine alldata={alldata}/>
    </div>
  )
}
