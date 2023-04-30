import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import MainNavbar from "@/components/navbar";
import Landing from "@/components/landing";
import Main from "@/components/main";
import Combine from "@/components/combine";
import data from "./grants.json";

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
    // throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  let data = await getData();
  let alldata = data.grants;
  console.log(alldata)
  
  // let alldata = [];
  // let dat = data['_default']
  // let l = Object.keys(dat).length
  // for (let i=1; i<=l; i++){
  //   alldata.push(dat[`${i}`])
  // }

  return (
    <div className="max-w-[100vw] ">
      <Combine alldata={alldata}/>
    </div>
  )
}
