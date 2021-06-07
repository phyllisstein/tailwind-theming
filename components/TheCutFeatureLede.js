import React from 'react'

export default function TheCutFeatureLede() {
    return (
        <div className="max-w-6xl m-auto my-24">
            <div className="w-full border pl-20 border-gray-400 mb-2">
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center pr-20">
                    <div className="uppercase text-chap-xs mb-5 border-t border-black pt-4"><span className="font-chap-bold">In Conversation</span> <span className="text-red-500 px-2">|</span>  <span className="font-chap">May 27, 2021</span></div>
                    <div className="block mb-4">
                    <h1 className="font-canela text-canela-xl mb-1 inline mr-2">
                        In Conversation: Francis Ford Coppola
                    </h1>
                    <h2 className="font-canela text-gray-500 text-canela-xl inline">His recut of The Godfather: Part III is one of his most personal projects yet, but it’s hardly his last.</h2>
                    </div>
                    <p className="font-chap text-chap-s pb-4 mb-8">By Bilge Ebiri <span className="text-red-500 px-2">|</span> Photograph by Katy Grannan</p>
                    </div>
                    <figure className="w-1/2">
                        <img className="w-full h-full mb-2" src="https://pyxis.nymag.com/v1/imgs/74f/d38/457f4cfaffd76cd4b149b85c85b0592fc5-10-francis-ford-coppola-opener.2x.rvertical.w570.jpg"></img>
                    </figure>
                </div>
        </div>
        <figcaption className="font-chap text-gray-500 text-chap-xs w-1/2 ml-auto pl-20 tracking-normal">“I’ve always been doing weird, stupid things and following my heart. It made no sense to handle my career the way I did, but I wouldn’t do it another way.” <span className="text-gray-500">Photo: Katy Grannan for New York Magazine</span>
        </figcaption>
    </div>
    )
  }