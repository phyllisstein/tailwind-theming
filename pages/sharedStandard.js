import SharedStandardLede from '../components/SharedStandardLede'
import React, { useState } from 'react';


export default function Shared() {
    const [theme, setTheme] = useState("vulture")
    return (
        <div>
            <div className="text-center my-8">Choose theme:
            <span onClick={() => setTheme("thecut")} className="px-12 cursor-pointer underline">The Cut</span> /
            <span onClick={() => setTheme("vulture")} className="px-12 cursor-pointer underline">Vulture</span> /
            <span onClick={() => setTheme("vox")} className="px-12 cursor-pointer underline">Vox</span>
            </div>
            <SharedStandardLede theme={theme}></SharedStandardLede>
        </div>
    )
  }