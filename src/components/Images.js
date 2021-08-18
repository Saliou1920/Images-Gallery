import React, {useState } from 'react';
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';
import { UilRefresh } from '@iconscout/react-unicons';

export default function Images() {
    const [page, setPage] = useState(1);
    const [images, setImages, error, isLoading] = useFetchImage(page);
    // const [newImagesUrl, setnewImagesUrl] = useState("");
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);


    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index));
    }

    function ShowImage() {
        return (
            images.map((img, index) => (
                <Image image={img.urls.regular} index={index} handleRemoveImage={handleRemoveImage}/>
        )));
    }
    // function handleAddButton() {
    //     if (newImagesUrl !== "") {
    //         setImages([...images, newImagesUrl]);
    //         setnewImagesUrl("");
    //     }      
    // }

    // function handleChange(event) {
    //     setnewImagesUrl(event.target.value);
    // }
    if (isLoading) {
        console.log("loading");
    } else {
        console.log("not loading");
    }
    return isLoading ? (
        <div className="flex h-screen">
            <p className="m-auto">
                <i className="fas fa-circle-notch fa-spin text-5xl"></i>
            </p>
        </div>
    ):(
        <section >
            {
            error.length > 0 && 
            <div className="flex h-screen">
                <p className="m-auto">{error[0]}</p>
            </div>
            }
            <div className="gap-0" style={{columnCount: 3}}>
                <ShowImage/>
            </div>
            {/* {error.length > 0 ? null : (
                <div className="p-7">
                    <UilRefresh 
                        width="100%" 
                        size="4rem" 
                        onClick={() => setPage(page+1)}    
                    />  
                </div>
            ) } */}

            {error.length === 0 && (
                <div className="p-7">
                    <button 
                        width="100%" 
                        size="4rem" 
                        onClick={() => setPage(page+1)}    
                    >Load more</button>  
                </div>
            ) }
            {/* <div className="flex justify-between m-4">
                <input 
                    type="text" 
                    className="p-2 border border-gray-600 w-full"
                    id="inputBox"
                    ref={inputRef}
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
            </div> */}
        </section>
    
    )
}
