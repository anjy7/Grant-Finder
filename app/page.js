import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import MainNavbar from "@/components/navbar";
import Landing from "@/components/landing";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch(`https://grant-finder-api.onrender.com/findGrants`, {
    method: "GET",
  
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
     next: { revalidate: 10 } 
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {

  const data = await getData();
  const alldata = data.grants;
  console.log("-====================================================",alldata)
  return (
    <div>
      <MainNavbar />
      <Landing />
      <Main data={alldata}/>
    </div>
  )
}
