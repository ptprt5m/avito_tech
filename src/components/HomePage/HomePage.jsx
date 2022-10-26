import React, {useEffect} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import Preloader from "../__commons/Preloader/Preloader";

const HomePage = ({news, newsItems, getNewsItemTC, isFetching}) => {

    useEffect(() => {
        if (news.length > 0) {
            for (let i = 0; i < news.length; i++) {
                getNewsItemTC(news[i])
            }
        }
    }, [news])

    return (
        <div className='homepage'>
            {isFetching ? <Preloader/> :
                <div className='homepage-news'>
                    {newsItems.sort((a, b) => (a && b) ? b.time - a.time : null).map(newsItem => {
                        return newsItem ? <NewsItem newsItem={newsItem}/> : null
                    })}
                </div>
            }
        </div>
    );
};

export default HomePage;