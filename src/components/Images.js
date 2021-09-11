import React, {useState} from 'react';
import Image from './Image';
import Loading from './Loading';

import useFetchImage from '../utils/hooks/useFetchImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';
import useDebounce from '../utils/hooks/useDebounce';

export default function Images() {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);

    const [images, setImages, error, isLoading] = useFetchImage(page, searchTerm);
    const debounce = useDebounce();
    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index));
    }

    function ShowImage() {
        return ( 
        <InfiniteScroll 
            dataLength={images.length} 
            next={()=> setPage(page+1)}
            hasMore={true}
            className="flex flex-wrap"
            loader={<Spinner animation="border" variant="danger" />}
            >
            {images.map((img, index) => (
                <Image image={img.urls.regular} index={index} handleRemoveImage={handleRemoveImage}/>
                ))
            }
        </InfiniteScroll>
        );
    }

    function handleInput(params) {

        const text = params.target.value;
        debounce(() => {setSearchTerm(text);}, 1000);
    }
    if (isLoading) return <Loading />;
    return (
        <section >

            <div className="my-5">
                <input type="text" onChange={handleInput} 
                    className="w-full border rounded shadow p-3"
                    placeholder="Search Photos here..."
                    autoFocus
                    />
            </div>
            {
            error.length > 0 && 
            <div className="flex h-screen">
                <p className="m-auto">{error[0]}</p>
            </div>
            }
            <div className="flex flex-wrap">
                <ShowImage/>
            </div>
            
        </section>
    
    )
}
