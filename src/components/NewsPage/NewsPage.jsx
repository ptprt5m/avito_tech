import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Preloader from "../__commons/Preloader/Preloader";
import Comments from "../Comments/Comments";

const NewsPage = ({currentNewsItem, isFetching, comments, getCommentsTC, getCurrentNewsItemTC}) => {

    const params = useParams()
    const id = params.newsId

    useEffect(() => {
        getCurrentNewsItemTC(id)
    }, [])

    return (
        <div className='flexColumn'>
            {isFetching ? <Preloader/> :
                <div className='newsItem wh100 flexColumn'>
                    <div className='newsItem__titleBlock flex'>
                        <h2 className='newsItem__titleBlock-title'>{currentNewsItem.title}</h2>
                        <a className='newsItem__titleBlock-link' href={currentNewsItem.url}>
                            Link
                        </a>
                    </div>
                    <div className='newsItem__descBlock flex'>
                        <span className='newsItem__descBlock-desc'>by: {currentNewsItem.by}</span>
                        <span
                            className='newsItem__descBlock-desc'>posted: {Math.round((Math.floor(Date.now() / 1000) - currentNewsItem.time) / 60)} minutes ago</span>
                        <span className='newsItem__descBlock-desc'>comments: {currentNewsItem.descendants}</span>
                    </div>
                    {currentNewsItem.descendants > 0 ?
                        <Comments comments={comments} currentNewsItem={currentNewsItem} getCommentsTC={getCommentsTC} /> : null}
                </div>}
        </div>
    );
};

export default NewsPage;