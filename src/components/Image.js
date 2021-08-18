import React, { useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'

export default function Image({image, index, handleRemoveImage}) {
    const [isHovering, setisHovering] = useState(false);

    return (
        
        <div className="flex justify-center border border-3 p-1">
            <div key={index} className="relative"
                onMouseEnter={() => setisHovering(true)} 
                onMouseLeave={() => setisHovering(false)}
            
            >
            <UilTimes className={`absolute right-0 top-3 cursor-pointer opacity-30 hover:opacity-100 
                    ${isHovering ? "" : "hidden"}`
                } 
                onClick={() => handleRemoveImage(index)}
            />
            <img src={image} width="100%" alt="" className="my-2"/>
        </div>
        </div>
       
    )
}
