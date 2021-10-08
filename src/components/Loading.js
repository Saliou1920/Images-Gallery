import Loader from "react-loader-spinner";
import React from 'react';

export default function Loading() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Loader
                type="ThreeDots"
                color="##151515"
                height={100}
                width={100}
                timeout={3000} //2 secs
                />
            </div>
        </div>
        
    )
}