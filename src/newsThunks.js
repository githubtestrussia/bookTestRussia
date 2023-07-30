import axios from 'axios';
import { addNews, changeLoadingStatus } from "../src/reducers/libraryReducer.js";
import { API_KEY } from "./components/NewsList/newsList.js";

export const fetchNews = () => async (dispatch) => {
    dispatch(changeLoadingStatus(true));
    try {
        const response = await axios(`https://newsapi.org/v2/everything?q=apple&from=2023-07-29&to=2023-07-29&sortBy=popularity&apiKey=${API_KEY}`);
        dispatch(addNews(response.data?.articles));
    } catch (error) {
        alert(error);
    }
    dispatch(changeLoadingStatus(false));
};
