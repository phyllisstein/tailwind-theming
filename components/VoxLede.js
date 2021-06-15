import React from 'react'

export default function VoxLede() {
    return (
        <div>
            <div className="bg-vox-yellow w-full text-center py-24">
                <div className="max-w-6xl m-auto">
                <div className="text-balto-xs mb-8 tracking-normal"><span className="font-balto-bold pr-2 relative z-0 vox-highlight">Rideables</span> / <span className="font-balto pl-2 text-gray-500">May 27, 2021</span></div>
                <h1 className="font-balto-bold text-balto-xl mb-4">Bird announces its third-generation electric scooter with automatic emergency braking</h1>
                <h2 className="font-balto text-balto-base mb-8">The company says it's the safest scooter yet</h2>
                <p className="font-balto text-balto-xs pb-4 mb-8 tracking-normal">By <span className="relative z-0 vox-highlight font-balto-bold">Andrew J. Hawkins</span> @andyjayhawk</p>
                </div>
            </div>
            <div>
            <figure className="max-w-6xl m-auto -mt-16">
                <img className="w-2/3 mb-2" src="https://cdn.vox-cdn.com/thumbor/BwFVMS2O3XJc76I8CbarlKEjUQo=/0x0:7178x4788/1820x1213/filters:focal(3015x1820:4163x2968):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69350084/B3_Press.0.jpg"></img>
                <figcaption className="font-balto text-gray-500 text-balto-xs tracking-normal mb-8">Photo: Bird</figcaption>
            </figure>
            </div>
        </div>
    )
  }