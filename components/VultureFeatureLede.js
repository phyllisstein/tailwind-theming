import React from 'react'

export default function VultureFeatureLede() {
    return (
        <div className="max-w-6xl m-auto my-24">
            <div className="border-b border-t border-r border-gray-400 mb-2">
            <div className="w-full border-l-12 pl-20 border-black">
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center pr-20">
                    <div className="uppercase mb-5"><span className="font-elderkin text-elderkin-xs border-r border-vulture-blue pr-2">Rideables</span><span className="pl-3 font-miller-text text-miller-text-2xs">May 27, 2021</span></div>
                    <div className="block mb-4">
                    <h1 className="inline font-elderkin text-elderkin-4xl mr-2">
                    The company says it’s the safest scooter yet
                    </h1>
                    <h2 className="inline font-miller-display text-miller-display-xl">Bird announces its third-generation electric scooter with automatic emergency braking
</h2>
                    </div>
                    <p className="font-miller-italic text-miller-text-xs pb-4 mb-8">By Andrew J. Hawkins</p>
                    </div>
                    <figure className="w-1/2">
                        <img className="w-full h-full mb-2" src="https://assets.codepen.io/495601/bird-vertical.png"></img>
                    </figure>
                </div>
                </div>
        </div>
        <figcaption className="font-miller-text text-miller-text-2xs w-1/2 ml-auto pl-20 tracking-wide leading-snug">Photo: Bird
        </figcaption>
    </div>
    )
  }