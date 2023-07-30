import axios from "axios";
import libraryReducer, { addNews, changeLoadingStatus} from "../../reducers/libraryReducer.js";
import React, {useEffect, useState} from "react";
import {API_KEY} from "./newsList.js";
import {useDispatch, useSelector} from "react-redux";
import NewsItem from "../NewsItem/NewsItem.jsx";
import LibraryPagination from "../LibraryPagination/LibraryPagination.jsx";
import Loader from "../Loader/Loader.jsx";

const NewsList =()=>{
    const {isLoading, newsList} = useSelector(state=>state.libraryReducer);
    const dispatch = useDispatch();


    const [newsCurrentPage, setNewsCurrentPage] = useState(1);
    const pageSize = 10;

    const currentNews = newsList.slice((newsCurrentPage - 1) * pageSize, newsCurrentPage * pageSize);
    const getNews = async () => {
        dispatch(changeLoadingStatus(true))
        try {
            await axios(`https://newsapi.org/v2/everything?q=apple&from=2023-07-29&to=2023-07-29&sortBy=popularity&apiKey=${API_KEY}`)
                .then(news=>dispatch(addNews(news.data?.articles)));

        } catch (error) {
            alert(error);
        }
        dispatch(changeLoadingStatus(false))
    };

    const changeNewListPage =(e)=>{
        setNewsCurrentPage(e)
    }

    useEffect(() => {
        getNews();
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