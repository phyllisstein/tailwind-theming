import React from 'react'

export default function VultureFeatureLede() {
    return (
        <div className="max-w-6xl m-auto my-24">
            <div className="border-b border-t border-r border-gray-400 mb-2">
            <div className="w-full border-l-8 pl-20 border-black">
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center pr-20">
                    <div className="uppercase mb-5 tracking-widest"><span className="font-elderkin text-s ">In Conversation</span> <span className="text-blue-500 px-2">|</span>  <span className="font-miller text-xs">May 27, 2021</span></div>
                    <h1 className="font-elderkin text-6xl mb-1">
                        In Conversation: Francis Ford Coppola
                    </h1>
                    <h2 className="font-miller-display text-5xl mb-1">His recut of The Godfather: Part III is one of his most personal projects yet, but it’s hardly his last.</h2>
                    <p className="font-miller-italic tracking-widest text-sm pb-4 mb-8">By Bilge Ebiri <span className="text-blue-500 px-2">|</span> Photograph by Katy Grannan</p>
                    </div>
                    <figure className="w-1/2">
                        <img className="w-full h-full mb-2" src="https://pyxis.nymag.com/v1/imgs/74f/d38/457f4cfaffd76cd4b149b85c85b0592fc5-10-francis-ford-coppola-opener.2x.rvertical.w570.jpg"></img>
                    </figure>
                </div>
                </div>
        </div>
        <figcaption className="font-miller text-xs w-1/2 ml-auto pl-20">“I’ve always been doing weird, stupid things and following my heart. It made no sense to handle my career the way I did, but I wouldn’t do it another way.” <span class="text-gray-500">Photo: Katy Grannan for New York Magazine</span>
        </figcaption>
    </div>
    )
  }