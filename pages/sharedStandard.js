import SharedStandardLede from '../components/SharedStandardLede'
import React, { useState } from 'react';


export default function Shared() {
    const [theme, setTheme] = useState("vulture")
    return (
        <div>
            <button onClick={() => setTheme(theme==="vulture" ? "thecut" : "vulture")} className="mt-8 ml-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Change theme</button>
            <SharedStandardLede theme={theme}></SharedStandardLede>
        </div>
    )
  }