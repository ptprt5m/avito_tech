import React from 'react';
import {decodeMarkup} from "../../commons/func";

const Comment = ({comment}) => {

    return (
        <div className='newsItem__comments-block wh100 flexColumn'>
            <div className='newsItem__comments-block_header wh100 flex'>
                <span>
                    by: {comment.deleted ? 'No Name' : comment.by} - {Math.round((Math.floor(Date.now() / 1000) - comment.time) / 60)} minutes ago
                </span>
            </div>
            {comment.deleted ?
                <span className='newsItem__comments-block_text'
                      style={{fontFamily: 'monospace'}}>commentary deleted</span> :
                <div className='newsItem__comments-block_text'
                     dangerouslySetInnerHTML={decodeMarkup(comment.text)}/>}
            {comment.kids ? <div className='newsItem__comments-block_replies'>
                Replies &#8595;
            </div> : null}

            {}
        </div>
    );
};

export default Comment;