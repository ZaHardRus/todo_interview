import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState} from './store'
import {AppDispatch} from "./store";
import {useEffect, useState} from "react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}
