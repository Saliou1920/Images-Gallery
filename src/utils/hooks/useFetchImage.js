import axios from 'axios';
import { useEffect, useState } from 'react'

const url = process.env.REACT_APP_UNPLASH_API;
const secret = process.env.REACT_APP_UNPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(searchTerm);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`)
        .then((res) => {
            setImages([...images, ...res.data.results]);
            setIsLoading(false);
    })
        .catch((err) => {
            setError(["Unable to fetch images"]);
            setIsLoading(false);
        })
    
    }, [page, searchTerm]);
    
    return [images, setImages, error, isLoading];
}
