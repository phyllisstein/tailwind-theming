import HeroImage from './HeroImage'
import React from 'react'

export default function TheCutLede({ heroCaption, heroImage, children, date, rubric }) {
    return (
        <div className="max-w-6xl m-auto my-24 pt-4 border-t border-black">
            <div className="uppercase text-xs mb-5"><span className="font-chap-bold">{ rubric }</span> <span className="text-red-500 px-2">|</span>  <span className="font-chap">{ date }</span></div>
            { children }
            <HeroImage src={ heroImage } caption={ heroCaption } />
      </div>
    )
  }
