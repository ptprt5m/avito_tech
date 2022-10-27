import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Comments from "../Comments/Comments";
import {timeFormat} from "../../commons/func";
import Preloader from "../__commons/Preloader/Preloader";

const NewsPage = ({isFetchingCurrentItem, currentNewsItem, getCurrentNewsItemTC}) => {

    const params = useParams()
    const id = params.newsId


    useEffect(() => {
        getCurrentNewsItemTC(id)
    }, [])

    const fetch = () => {
        return <Preloader/>
    }
    const updateComments = () => {
        getCurrentNewsItemTC(id)
    }

    return (
        <div className='flexColumn'>
            {isFetchingCurrentItem ? fetch() :
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
                            className='newsItem__descBlock-desc'>posted: {timeFormat(currentNewsItem.time)}</span>
                        <span className='newsItem__descBlock-desc'>comments: {currentNewsItem.descendants}</span>
                    </div>
                    {currentNewsItem.descendants > 0 ?
                        <Comments updateComments={updateComments} currentNewsItem={currentNewsItem}/> : null}
                </div>
            }
        </div>
    );
};

export default NewsPage;