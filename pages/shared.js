import SharedLede from '../components/SharedLede'
import React, { useState } from 'react';


export default function Shared() {
    const [theme, setTheme] = useState("vox")
    return (
        <div>
            <SharedLede theme={theme}></SharedLede>
            <button onClick={() => setTheme(theme==="vox" ? "thecut" : "vox")} className="mt-24 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Change theme</button>
        </div>
    )
  }



