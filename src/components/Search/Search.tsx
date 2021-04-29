import React, {useRef} from 'react'
import { useAppDispatch } from "../../app/state";
import { addNewBooks } from "../../app/books";
import { useLoaderContext } from "../../context/LoaderContext";
import './Search.scss';

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
            if (data.docs) {
                dispatch(addNewBooks(data.docs))
                setStatus('disable')
            } else {
                setStatus('disable')
                // обработка ошибки
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="input-wrapper">
            <input ref={inputField} onChange={debounce(getRequest)} type="text" className="input-textfield" placeholder="Вевдите название книги..." />
            <button onClick={getRequest} className="search-button">Поиск</button>
        </div>
    )
}