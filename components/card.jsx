
const imgs = {
    "Solana Foundation":"/solana.svg",
    "Solana":"/solana.svg",
    "Reserve":"data:image/png;base64,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",
    "Ekstasis":"/solana.svg",
    "Solrazr":"https://blockworks.co/_next/image?url=https%3A%2F%2Fassets.coingecko.com%2Fcoins%2Fimages%2F4128%2Flarge%2Fsolana.png%3F1640133422&w=64&q=75",
    "HXRO Network":"https://www.finsmes.com/wp-content/uploads/2021/12/hxro.jpg",
    "Wormhole":"/wormhole.png",
    "Chingari":"https://gari.network/wp-content/themes/gari/assets/img/gari-icon-new.png",
    "Streamflow":"https://d1fdloi71mui9q.cloudfront.net/OSQgazbxTxmX5YD0iSoj_0JXDowEFTazzQYpd",
    "Pyth Network":"https://icoholder.com/media/cache/ico_logo_view_page/files/img/bb1b4116ea0f723fec07a6bc5fe1e0f5.jpeg",
    "Lens Protocol":"https://th.bing.com/th/id/OIP.kwqePQGpgXlmdONjI6b3eAHaIP?pid=ImgDet&rs=1",
    "Lit Protocol":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHPK1XrbCP8eYk-utg__2CeytXcZK2lOe8P1WtVKm0SK6yoWIdeoyItlVuS7u0X5XFak&usqp=CAU"
}

export default function Card({ project, type, category, imgUrl, name, funding, time, accepting }) {
    // console.log(project in imgs)
    return (
        <div className="text-center hover:scale-105">
            <div className="h-[28rem] w-80 rounded-[3.3rem]   p-4 relative bg-black bg-opacity-25   shadow-inner shadow-[#5049a8]">
                {
                    <img src={(project in imgs)?imgs[project]:imgUrl} className="h-20 w-auto  rounded-full absolute left-[7.6rem] mt-16"></img>
                }
                <div className="absolute w-full flex justify-center">
                <div className="text-white font-medium text-lg mt-3 mr-10">{project=="Ekstasis"?"Solana":project}</div>
                </div>
                <img src="/Ellipse2.png" className="absolute  ml-[-3.5rem] left-[.1rem] max-w-[80rem]   opacity-[0.75]" alt="..." />
                <div className="h-[50%] rounded-[3.5rem] bg-[#9a92d226] opacity-[0.08] "></div>
                <div className="flex flex-col ">
                    <div className="text-white font-medium text-lg mt-3">{name}</div>
                    <div className="flex gap-2 flex-wrap mt-3 justify-center ">
                    {
                            type?.map(x => {
                                return(<div className=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                                    <div className=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                        {x}
                                    </div>
                                </div>)
                            })
                        }
                        {
                            category?.map(x => {
                                return(<div className=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                                    <div className=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                        {x}
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                    <div className="absolute mt-[9.5rem]">
                        <div className="flex items-center">
                            
                            <div className="text-white font-semibold text-md">{!funding? <div className="flex"> <img src="/dollar.png" className="h-6 w-6" alt="..."/><div>-</div></div>  : funding}</div>
                        </div>

                    </div>
                    <div className="right-4 absolute mt-[9.5rem]">
                        <div className="flex items-center gap-2">
                            <div className="text-white font-semibold text-md">{time == 0 ? "-" : time}</div>
                            <img src="/time.png" className="h-6 w-6" alt="..." />
                        </div>
                    </div>
                    <div className="left-[6.5rem] bottom-3 absolute">
                    {
                        accepting == "Accepting Applications"?<div className="text-white font-semibold text-md border-[1.6px] py-[4px] px-5 rounded-2xl">Accepting</div>:accepting == 0? <div className="text-white font-semibold text-md border-[1.6px] py-[4px] px-5 rounded-2xl">Accepting</div>:accepting == "Opening soon"? <div className="text-white font-semibold text-md border-[1.6px] py-[4px] px-5 rounded-2xl">Opening soon</div>: <div className="text-white font-semibold text-md border-[1.6px] py-[4px] px-5 rounded-2xl">Closed</div>
                    }
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
