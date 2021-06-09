import React from 'react'

export default function VoxFeatureLede() {
    return (
        <div className="w-full my-24 bg-vox-yellow pb-12">
            <div className="max-w-6xl m-auto">
            <div className="w-full pl-20">
                <div className="flex flex-row">
                    <div className="max-w-lg flex flex-col justify-center absolute top-1/4 left-1/4">
                    <div className="uppercase text-xs mb-5"><span className="font-balto-bold pr-2">Rideables</span> / <span className="font-balto pl-2">May 27, 2021</span></div>
                    <div className="block mb-4">
                    <h1 className="font-balto-bold underline text-balto-3xl">Bird announces its third-generation electric scooter with automatic emergency braking</h1>
                    </div>
                    <p className="font-balto text-chap-2xs pb-4 mb-8">Andrew J. Hawkins</p>
                    </div>
                    <figure className="w-1/2 ml-auto">
                        <img className="w-full h-full mb-2" src="https://assets.codepen.io/495601/bird-vertical.png"></img>
                        <figcaption className="font-balto text-gray-500 text-chap-2xs w-1/2 ml-auto text-right tracking-normal">Image: Bird</figcaption>
                    </figure>

                </div>
            </div>
        </div>
    </div>
    )
}