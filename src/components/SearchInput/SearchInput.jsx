import { Input } from 'antd';

import { debounce } from "debounce";
import {useDispatch} from "react-redux";
import {changeInputTitle} from "../../reducers/libraryReducer.js";
import {useCallback} from "react";

const SearchInput =()=>{
    const dispatch  = useDispatch();


    const changeInputBook = useCallback(debounce((value) => {
        if(value.trim() !== ''){
            dispatch(changeInputTitle(value));
        }else{
            dispatch(changeInputTitle('pokemons'));
        }

    }, 500), []);

    return (
        <div style={{width:'74vw', display:'flex', margin:'0 auto', marginTop:20}}>
            <Input placeholder="Search a book" onChange={(e)=>changeInputBook(e.target.value)} />
        </div>
    )
}

export default SearchInput;
