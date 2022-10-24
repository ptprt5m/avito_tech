import React, {useEffect} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import Preloader from "../__commons/Preloader/Preloader";
import refreshIcon from '../../img/refresh.png'

const HomePage = ({news, newsItems, getNewsTC,  getNewsItemTC, isFetching}) => {

    useEffect(() => {
        getNewsTC()
    }, [])

    useEffect(() => {
        if (news.length > 0) {
            for (let i = 0; i < news.length; i++) {
                getNewsItemTC(news[i])
            }
        }
    }, [news])

    return (
        <div className='homepage'>
            {isFetching ? <Preloader /> :
                <div className='homepage-news'>
                    {newsItems.sort((a, b) => b.time - a.time).map(newsItem => {
                        return newsItem ? <NewsItem newsItem={newsItem} /> : null
                    })}
                </div>}
        </div>
    );
};

export default HomePage;