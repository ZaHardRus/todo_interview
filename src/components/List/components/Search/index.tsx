import { useEffect, useState } from "react";
import {useAppDispatch, useDebounce} from "../../../../app/hooks";
import {searchTasks} from "../../../../app/todoSlice";


export const Search = () => {
    const dispatch = useAppDispatch()
    const [searchStr, setSearchStr] = useState<string>("");
    const handleChange = (e: any) => {
        setSearchStr(e?.target?.value);
    };

    const debounceValue = useDebounce(searchStr, 1000);
    useEffect(() => {
        dispatch(searchTasks(debounceValue))
    }, [debounceValue]);

    return (
        <div className={'todo-form'}>
            <input value={searchStr} onChange={handleChange} type="text" />
        </div>
    );
};
