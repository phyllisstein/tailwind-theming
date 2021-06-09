import React from 'react'

export default function TheCutFeatureLede() {
    return (
        <div className="max-w-6xl m-auto my-24">
            <div className="border-b border-t border-r border-gray-400 mb-2">
            <div className="w-full border-l-12 pl-20 border-black">
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center pr-20 max-w-lg">
                    <div className="uppercase text-chap-3xs mb-5"><span className="font-chap-bold border-r border-red-500 pr-2">Rideables</span><span className="font-chap pl-3">May 27, 2021</span></div>
                    <div className="block mb-4">
                    <h1 className="font-canela-bold text-canela-3xl mb-1 inline mr-2">
                        The company says it’s the safest scooter yet
                    </h1>
                    <h2 className="font-canela text-canela-3xl inline">Bird announces its third-generation electric scooter with automatic emergency braking</h2>
                    </div>
                    <p className="font-chap text-chap-2xs pb-4 mb-8">Andrew J. Hawkins</p>
                    </div>
                    <figure className="w-1/2">
                        <img className="w-full h-full mb-2" src="https://assets.codepen.io/495601/bird-vertical.png"></img>
                    </figure>
                </div>
            </div>
        </div>
        <figcaption className="font-chap text-gray-500 text-chap-2xs w-1/2 ml-auto pl-20 tracking-normal">Image: Bird
        </figcaption>
    </div>
    )
  }