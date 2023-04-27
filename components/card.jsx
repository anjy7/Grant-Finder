
const imgs = {
    "Solana Foundation":"https://blockworks.co/_next/image?url=https%3A%2F%2Fassets.coingecko.com%2Fcoins%2Fimages%2F4128%2Flarge%2Fsolana.png%3F1640133422&w=64&q=75",
    "Ekstasis":"https://blockworks.co/_next/image?url=https%3A%2F%2Fassets.coingecko.com%2Fcoins%2Fimages%2F4128%2Flarge%2Fsolana.png%3F1640133422&w=64&q=75",
    "Solrazr":"https://blockworks.co/_next/image?url=https%3A%2F%2Fassets.coingecko.com%2Fcoins%2Fimages%2F4128%2Flarge%2Fsolana.png%3F1640133422&w=64&q=75",
    "HXRO Network":"https://www.finsmes.com/wp-content/uploads/2021/12/hxro.jpg",
    "Wormhole":"/wormhole.png",
    "Chingari":"https://gari.network/wp-content/themes/gari/assets/img/gari-icon-new.png",
    "Streamflow":"https://d1fdloi71mui9q.cloudfront.net/OSQgazbxTxmX5YD0iSoj_0JXDowEFTazzQYpd",
    "Pyth Network":"https://icoholder.com/media/cache/ico_logo_view_page/files/img/bb1b4116ea0f723fec07a6bc5fe1e0f5.jpeg",
}

export default function Card({ project, details, type, category, deadline, imgUrl, name, funding, time }) {

    return (
        // <div className="h-[28rem] w-80 rounded-[3.3rem] bg-gray-500 bg-opacity-20 ">
        //     {/* <div className="bg-auto bg-no-repeat h-2/5 rounded-t-2xl rounded-b-xl w-full bg-center" style={{ backgroundImage: "url('https://uploads-ssl.webflow.com/61d0960dc36814254b73e5ba/63c58f8681ed581fe75226c7_0.png')" }}>
        //     </div> */}

        //     <div className="bg-auto bg-no-repeat h-2/5 rounded-t-2xl rounded-b-xl w-full bg-center" style={{ backgroundImage: `url(${imgUrl})` }}>
        //     </div>
        //     <div>
        //         <div className="text-white relative p-2">
        //             <h1  className="text-xl font-semibold">{project}</h1>
        //             <h1  className="text-md font-semibold">{name}</h1>
        //             {/* <h5 className="text-sm bg-blue-gray-500 min-h-[8rem]">{details}</h5> */}
        //             <h1  className="text-sm bg-brown-500 mt-3 w-fit p-1 rounded-sm">{type}</h1>
        //             <div className="flex gap-2">
        //             {
        //                 category.map(x=> <div  className="text-sm bg-indigo-800 mt-2 w-fit p-1 rounded-sm ">{x}</div>)
        //             }

        //             </div>

        //             <div className="absolute mt-6">💵 Variable</div>
        //             <h1  className="text-sm h-fit w-fit p-1 absolute right-2 mt-5 mr-1 rounded-lg bg-gray-600">🟢 Accepting</h1>
        //         </div>
        //     </div>
        // </div>

        <div className="text-center">
            <div className="h-[28rem] w-80 rounded-[3.3rem]   p-4 relative    shadow-inner shadow-[#281e8780]">
                {/* <div className="h-[28rem] w-80 rounded-[3.3rem]   p-4 relative   shadow-[inset_0_10px_40px_rgba(67, 255, 100, 0.85)]"> */}
                {
                    <img src={imgUrl===0?imgs[project]:imgUrl} className="h-20 w-auto  rounded-full absolute left-[7.6rem] mt-16"></img>
                }
                
                <div className="absolute w-full flex justify-center">
                <div className="text-white font-medium text-lg mt-3 mr-10">{project=="Ekstasis"?"Solana":project}</div>
                </div>
                <img src="/Ellipse2.png" class="absolute  ml-[-4rem] max-w-5xl  mt-[-4rem] opacity-[0.75]" alt="..." />
                {/* <img src="/Ellipse1.png" class="absolute  ml-[-3rem] min-w-5xl  mt-[2.5rem]" alt="..." /> */}
                <img src="/Ellipse1.png" class="absolute  left-0 ml-[-3rem] w-[16rem]  mt-[1.2rem] opacity-[0.75]" alt="..." />
                <img src="/Ellipse1.png" class="absolute  right-0 mr-[-3rem] w-[16rem]  mt-[1.2rem] opacity-[0.75]" alt="..." />
                <div className="h-[50%] rounded-[3.5rem] bg-[#9a92d226] opacity-[0.08] "></div>
                <div className="flex flex-col ">
                    <div className="text-white font-medium text-lg mt-3">{name}</div>
                    <div className="flex gap-2 flex-wrap mt-3 justify-center ">
                    {
                            type?.map(x => {
                                return(<div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                                    <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                        {x}
                                    </div>
                                </div>)
                            })
                        }
                        {
                            category?.map(x => {
                                return(<div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                                    <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                        {x}
                                    </div>
                                </div>)
                            })
                        }
                        

                        {/* <div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                            <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                DeFi
                            </div>
                        </div>
                        <div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                            <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                Lend/Borrow
                            </div>
                        </div>
                        <div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                            <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                NFT
                            </div>
                        </div>
                        <div class=" fit-content rounded-xl bg-gradient-to-r from-[#281E87] via-[#4628B4] to-[#6947BD] px-[1px] py-[1.2px]">
                            <div class=" h-full w-full rounded-xl text-white bg-[#090A0D] px-4 py-[1px]">
                                Community
                            </div>
                        </div> */}

                    </div>
                    <div className="absolute mt-[9.5rem]">
                        <div className="flex items-center">
                            
                            <div className="text-white font-semibold text-md">{!funding? <div className="flex"> <img src="/dollar.png" class="h-6 w-6" alt="..."/><div>-</div></div>  : funding}</div>
                        </div>

                    </div>
                    <div className="right-4 absolute mt-[9.5rem]">
                        <div className="flex items-center gap-2">
                            <div className="text-white font-semibold text-md">{time == 0 ? "-" : time}</div>
                            <img src="/time.png" class="h-6 w-6" alt="..." />
                        </div>
                    </div>
                    <div className="left-[6.5rem] bottom-3 absolute">
                        <div className="text-white font-semibold text-md border-[1.6px] py-[4px] px-5 rounded-2xl">Accepting</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
