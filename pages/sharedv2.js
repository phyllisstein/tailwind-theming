import SharedLede2 from '../components/SharedLede2'
import React, { useState } from 'react';


export default function Shared() {
    const [theme, setTheme] = useState("vulture")
    return (
        <div>
            <button onClick={() => setTheme(theme==="vulture" ? "thecut" : "vulture")} className="mt-8 ml-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Change theme</button>
            <SharedLede2 theme={theme}></SharedLede2>
        </div>
    )
  }