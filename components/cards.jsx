import Card from "./card"
import { useEffect } from "react";

export default function Cards({ data,activeOption }) {

    useEffect(() => {
        console.log("first");
    }, [activeOption])

    const array = ["https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63d020c525b1abb082789af5_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c45a1274f934af80c1f810_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63cd786ac8b33af8c01bfc3c_0.png"]
    return (
        <div className="flex items-center">
            {
                data?.length == 0 || data == null? <div className="text-white">No matching results</div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10 xl:ml-0 xl:grid-cols-4 gap-14">
               {data?.map((x) => {
                    {/* console.log(x) */}
                    let imgUrl = array[Math.floor(array.length * Math.random())];
                    return  (
                        <a href={x.link} target="_blank">
                            <Card project={x.project} name={x.name} details={x.details} type={x.type} category={x.tags} deadline={x.deadline} imgUrl={x.img} funding={x.funding} time={x.time}/>
                        </a>
                    )
               })}
                </div>
            }
        </div>
    )
}
