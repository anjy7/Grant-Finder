import AllCards from "./allcard"

export default function Cards({ data }) {

    const array = ["https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63d020c525b1abb082789af5_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c45a1274f934af80c1f810_0.png","https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63cd786ac8b33af8c01bfc3c_0.png"]
    return (
        <div className="grid grid-cols-4 gap-14">
            {
                data?.length == 0 || data == null? <div className="text-white">No matching results</div>
                :
                data?.map((x) => {
                    let imgUrl = array[Math.floor(array.length * Math.random())];
                    return  <AllCards project={x.project} name={x.name} details={x.details} type={x.type} category={x.tags} deadline={x.deadline} imgUrl={x.img} funding={x.funding} time={x.time}/>

                })
            }
        </div>
    )
}