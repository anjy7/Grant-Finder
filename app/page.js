import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import MainNavbar from "@/components/navbar";
import Landing from "@/components/landing";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch(`${process.env.BACKEND_URL}/findGrants`, {
    method: "POST",
    body: JSON.stringify({
      category: "",
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    cache: "no-store"
  });
  if (!res.ok) {
    throw new error("asdf")
  }
  return res.json();
}

export default async function Home() {

  const data = await getData();
  const alldata = data.grants;
  return (
    <div>
      <MainNavbar />
      <Landing />
      <Main data={alldata}/>
    </div>
  )
}
