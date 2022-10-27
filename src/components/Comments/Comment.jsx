import React, {useEffect, useState} from 'react';
import {decodeMarkup, timeFormat} from "../../commons/func";
import {api} from "../../api/api";
import FetchingDiv from "../__commons/FetchingDiv/FetchingDiv";

const Comment = ({commentId}) => {

    const [kids, setKids] = useState([])
    const [comment, setComment] = useState({})
    const [replies, setReplies] = useState(false)

    useEffect(() => {
        if (!commentId) {
            return
        }
        const getRequest = async () => {
            const data = await api.getNewsItem(commentId);
            setComment(data);
            if (!data || !data.kids) {
                return;
            }
            setKids(data.kids);
        }
        getRequest().then(() => console.log('finish'));
    }, [commentId])

    if (!Object.keys(comment).length) {
        return <FetchingDiv/>
    }

    const handleKids = () => {
        if (comment.kids === 0 || kids.length === 0) {
            return;
        }
        return kids.map((kidId) => (
            <Comment
                key={kidId}
                commentId={kidId}
            />
        ));
    }

    const repliesToggle = () => {
        setReplies(!replies)
    }

    return (
        <div className='newsItem__comments-block wh100 flexColumn'>
            <div className='newsItem__comments-block_header wh100 flex'>
                <span>
                    by: {comment.deleted ? 'No Name' : comment.by} - {timeFormat(comment.time)}
                </span>
            </div>
            {comment.deleted ?
                <span className='newsItem__comments-block_text'
                      style={{fontFamily: 'monospace'}}>commentary deleted</span> :
                <div className='newsItem__comments-block_text wh100'
                     dangerouslySetInnerHTML={decodeMarkup(comment.text)}/>}
            {comment.kids ? <div className='newsItem__comments-block_replies' onClick={repliesToggle}>
                Replies {replies ? <span>&#8593;</span> : <span>&#8595;</span>}
            </div> : null}
            {replies ? <div className='newsItem__comments-block_kids'>
                {handleKids()}
            </div> : null}
        </div>
    );
};

export default Comment;