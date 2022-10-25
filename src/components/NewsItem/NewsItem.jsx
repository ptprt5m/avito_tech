import React from 'react';
import {limitStr} from "../../commons/func";
import {NavLink} from "react-router-dom";

const NewsItem = ({newsItem}) => {

    return (
        <div className='homepage-news_item flexColumn'>
            <div className='flex'>
                <NavLink to={`/${newsItem.id}`} className='homepage-news_item-title'>
                    &#9679; {limitStr(newsItem.title, 60)}
                </NavLink>
                <p className='homepage-news_item-name'>
                    by: {newsItem.by}
                </p>
            </div>
            <div className='flex'>
                <p className='homepage-news_item-date'>
                    Posted: {Math.round((Math.floor(Date.now() / 1000) - newsItem.time) / 60)} minutes ago
                </p>
                <p className='homepage-news_item-rating'>
                    Score: {newsItem.score}
                </p>
                <p className='homepage-news_item-comments'>
                    Comments: {newsItem.kids ? newsItem.kids.length : 0}
                </p>
            </div>
        </div>
    );
};

export default NewsItem;