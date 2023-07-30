
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NewsItem from "../NewsItem/NewsItem.jsx";
import LibraryPagination from "../LibraryPagination/LibraryPagination.jsx";
import Loader from "../Loader/Loader.jsx";
import {fetchNews} from "../../newsThunks.js";

const NewsList =()=>{
    const {isLoading, newsList} = useSelector(state=>state.libraryReducer);
    const dispatch = useDispatch();


    const [newsCurrentPage, setNewsCurrentPage] = useState(1);
    const pageSize = 10;

    const currentNews = newsList.slice((newsCurrentPage - 1) * pageSize, newsCurrentPage * pageSize);


    const changeNewListPage =(e)=>{
        setNewsCurrentPage(e)
    }

    useEffect(() => {
        dispatch(fetchNews());
    }, []);


    return (
        <div style={{ marginTop: 20, justifyContent: 'center', backgroundColor: '#fff', padding: '0 20px' }}>
            {isLoading ? (
                <Loader margin='50px 0' borderRadius='4px' size='large' width='100%' />
            ) : (
                <>
        <span
            style={{
                height: 28,
                backgroundColor: '#f68d2c',
                display: 'flex',
                borderRadius: '4px 4px 0 0',
                color: ' #fff',
                fontWeight: 600,
                fontSize: '16px',
                alignItems: 'center',
                paddingLeft: 20,
            }}
        >
          ЛЕНТА НОВОСТЕЙ
        </span>
                    {currentNews.length > 0 &&
                        currentNews.map((newsEl) => <NewsItem key={crypto.randomUUID()} {...newsEl} />)}
                    <LibraryPagination bottom={70} top={40} total={Math.ceil(newsList.length / pageSize) * 10} onChangePage={changeNewListPage} />
                </>
            )}
        </div>
    );
}

export default NewsList;