import React, {useState } from 'react'
import Image from './Image';

export default function Images() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1611258900752-147099c846ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2VuZWdhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=848&q=80",
        "https://images.unsplash.com/photo-1544374895-c98e79ac19af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1613463918637-3574cd5d34c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
    ]);
    const [newImagesUrl, setnewImagesUrl] = useState("");
    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index));
    }

    function ShowImage() {
        return (
        images.map((img, index) => (
            <Image image={img} index={index} handleRemoveImage={handleRemoveImage}/>
        )));
    }
    function handleAddButton() {
        if (newImagesUrl !== "") {
            setImages([...images, newImagesUrl]);
            setnewImagesUrl("");
        }
        
    }
    function handleChange(event) {
        setnewImagesUrl(event.target.value);
    }
    return (
        <section >
            <div className="flex flex-wrap justify-center">
                <ShowImage/>
            </div>
            <div className="flex justify-between m-4">
                <input type="text" className="p-2 border border-gray-600 w-full"
                    value={newImagesUrl}
                    onChange={handleChange}
                />
                <button
                    disabled = {newImagesUrl === ""} 
                    className={
                            `p-2 text-white ml-2 ${newImagesUrl !== "" ? "bg-green-600" : "bg-green-300 "}`
                        } 
                    onClick={handleAddButton}
                >Add new image
                </button>
            </div>
        </section>
    
        )
}
