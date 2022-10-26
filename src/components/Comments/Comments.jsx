import React from 'react';
import Comment from "./Comment";

const Comments = ({currentNewsItem}) => {

    return (
        <div className='newsItem__comments wh100 flexColumn'>
            <h3 className='newsItem__comments-title'>Comments</h3>
            {currentNewsItem.kids ? currentNewsItem.kids.map(comment => {

                return <Comment key={comment} commentId={comment} />

            }) : null}
        </div>
    );
};

export default Comments;