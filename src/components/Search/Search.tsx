import React, {useRef} from 'react'
import { useAppDispatch } from "../../app/state";
import { addNewBooks } from "../../app/books";
import { useLoaderContext } from "../../context/LoaderContext";

function debounce<F extends Function>(fn: F) {
    let timeout: ReturnType<typeof setTimeout>;
    return function(this: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.call(this), 1000)
    }
}

export function Search() {
    const inputField = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const { setStatus } = useLoaderContext()

    async function getRequest() {
        if (!inputField.current?.value.trim()) return;
        try {
            setStatus('enable')
            const response = await fetch(`http://openlibrary.org/search.json?q=${inputField.current?.value}`);
            const data = await response.json();
            dispatch(addNewBooks(data))
            setStatus('disable')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <input ref={inputField} onChange={debounce(getRequest)} type="text" className="input-textfield"/>
            <button onClick={getRequest} className="search-button">Поиск</button>
        </>
    )
}