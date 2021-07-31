import React, { useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'

export default function Image({image, index, handleRemoveImage}) {
    const [isHovering, setisHovering] = useState(false);

    return (
        
        <div key={index} className="relative"
            onMouseEnter={() => setisHovering(true)} 
            onMouseLeave={() => setisHovering(false)}
          
    >
        <UilTimes className={`absolute right-0 top-3 cursor-pointer opacity-30 hover:opacity-100 
                ${isHovering ? "" : "hidden"}`
            } 
            onClick={() => handleRemoveImage(index)}
        />
        <img src={image} width="250" alt="" className="my-4"/>
    </div>
    )
}
