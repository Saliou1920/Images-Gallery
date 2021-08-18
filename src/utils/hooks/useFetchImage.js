import axios from 'axios';
import { useEffect, useState } from 'react'

const url = process.env.REACT_APP_UNPLASH_URL;
const secret = process.env.REACT_APP_UNPLASH_KEY;

export default function useFetchImage(page) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}?client_id=${secret}&page=${page}`)
        .then((res) => {
            setImages([...images, ...res.data]);
            setIsLoading(false);
    })
        .catch((err) => {
            setError(["Unable to fetch images"]);
            setIsLoading(false);
        })
    
    }, [page]);
    
    return [images, setImages, error, isLoading];
}
