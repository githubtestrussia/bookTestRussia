import React from 'react';
import BookList from "./components/BookList/BookList.jsx";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx";
import {useSelector} from "react-redux";
const App = () => {
    const isLoadingBooks = useSelector(state=>state.bookReducer.isLoadingBooks);

    return (
        <div style={{display:'flex', justifyContent:'space-between'}} >
            {!isLoadingBooks ? <> <NavigationMenu/>
                <BookList/></>:'' }

        </div>
);

};

export default App;


