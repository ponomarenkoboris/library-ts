import React, {useRef} from 'react'
import { useAppDispatch } from "../../app/state";
import { addNewBooks } from "../../app/books";
import { useLoaderContext } from "../../context/LoaderContext";
import './Search.scss';

type DebounceReturn = (this: any) => void
type DebounceProps = () => Promise<void>
function debounce<F extends DebounceProps>(fn: F): DebounceReturn {
    let timeout: ReturnType<typeof setTimeout>;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.call(this), 1000)
    }
}

const accessControlToMakeSearch: (text: HTMLInputElement, button: HTMLButtonElement) =>
    void = (text, button) => {
    if (text.readOnly) {
        text.value = ''
        text.readOnly = false
        button.disabled = false
    } else {
        text.readOnly = true
        button.disabled = true
    }
}

export function Search() {
    const inputField = useRef<HTMLInputElement>(null);
    const buttonSearch = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch()
    const { setLoaderStatus } = useLoaderContext()

    async function getRequest(): Promise<void> {
        if (!inputField.current?.value.trim() || !buttonSearch.current) return;
        accessControlToMakeSearch(inputField.current, buttonSearch.current)
        try {
            setLoaderStatus('enable')
            const response = await fetch(`http://openlibrary.org/search.json?q=${inputField.current?.value}`);
            const data = await response.json();
            if (data.docs) {
                dispatch(addNewBooks(data.docs))
                setLoaderStatus('disable')
                accessControlToMakeSearch(inputField.current, buttonSearch.current)
            } else {
                accessControlToMakeSearch(inputField.current, buttonSearch.current)
                setLoaderStatus('disable')
                // обработка ошибки
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="input-wrapper">
            <input ref={inputField} onChange={debounce(getRequest)} type="text" className="input-textfield" placeholder="Вевдите название книги..." />
            <button ref={buttonSearch} onClick={getRequest} className="search-button">Поиск</button>
        </div>
    )
}