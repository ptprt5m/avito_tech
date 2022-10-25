import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Preloader from "../__commons/Preloader/Preloader";

const NewsPage = ({currentNewsItem, isFetching, comments, getCommentsTC, getCurrentNewsItemTC}) => {

    const params = useParams()
    const id = params.newsId

    useEffect(() => {
        getCurrentNewsItemTC(id)
    }, [])

    useEffect(() => {
        if (currentNewsItem.kids) {
            for (let i = 0; i < currentNewsItem.kids.length; i++) {
                getCommentsTC(currentNewsItem.kids[i])
            }
        }
    }, [getCommentsTC, currentNewsItem.kids])

    const decodeMarkup = (text) => {
        return { __html: text }
    }

    return (
        <div className='flexColumn'>
            {isFetching ? <Preloader/> :
                <div className='newsItem flexColumn'>
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
                        <div className='newsItem__comments flexColumn'>
                            <h3 className='newsItem__comments-title'>Comments</h3>
                            {comments ? comments.map(comment => {
                                return <div className='newsItem__comments-block wh100 flexColumn'>
                                    <div className='newsItem__comments-block_header wh100 flex'>
                                        <span>
                                            by: {comment.by} - {Math.round((Math.floor(Date.now() / 1000) - comment.time) / 60)} minutes ago
                                        </span>
                                    </div>
                                    <div className='newsItem__comments-block_text' dangerouslySetInnerHTML={decodeMarkup(comment.text)} />
                                </div>
                            }) : null}
                        </div> : null}
                </div>}
        </div>
    );
};

export default NewsPage;