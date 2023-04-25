
export default function AllCards({ project, details, type, category, deadline,imgUrl ,name}) {
    return (
        <div className="h-96 w-80 bg-black rounded-2xl">
            {/* <div className="bg-auto bg-no-repeat h-2/5 rounded-t-2xl rounded-b-xl w-full bg-center" style={{ backgroundImage: "url('https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png')" }}>
            </div> */}

            <div className="bg-auto bg-no-repeat h-2/5 rounded-t-2xl rounded-b-xl w-full bg-center" style={{ backgroundImage: `url(${imgUrl})` }}>
            </div>
            <div>
                <div className="text-white relative p-2">
                    <h1  className="text-xl font-semibold">{project}</h1>
                    <h1  className="text-md font-semibold">{name}</h1>
                    {/* <h5 className="text-sm bg-blue-gray-500 min-h-[8rem]">{details}</h5> */}
                    <h1  className="text-sm bg-brown-500 mt-3 w-fit p-1 rounded-sm">{type}</h1>
                    <div className="flex gap-2">
                    {
                        category.map(x=> <div  className="text-sm bg-indigo-800 mt-2 w-fit p-1 rounded-sm ">{x}</div>)
                    }
                   
                    </div>
                    
                    <div className="absolute mt-6">💵 Variable</div>
                    <h1  className="text-sm h-fit w-fit p-1 absolute right-2 mt-5 mr-1 rounded-lg bg-gray-600">🟢 Accepting</h1>
                </div>
            </div>
        </div>
    )
}
