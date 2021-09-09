import { useState } from 'react'

export default function useDebounce() {
    const [typingTimeout, setTypingTimeout] = useState("")
    
    function debounce(func, delay) {
        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => func(), delay);
        setTypingTimeout(timeout);
    }

    return debounce;
}
