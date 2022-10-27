import React, {useEffect} from 'react';
import Preloader from "../__commons/Preloader/Preloader";
import NewsItemContainer from "../NewsItem/NewsItemContainer";

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
                        return newsItem ? <NewsItemContainer newsItem={newsItem}/> : null
                    })}
                </div>
            }
        </div>
    );
};

export default HomePage;