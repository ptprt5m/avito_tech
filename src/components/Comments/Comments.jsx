import React, {useEffect} from 'react';
import Comment from "./Comment";

const Comments = ({comments, currentNewsItem, getCommentsTC}) => {

    useEffect(() => {
        if (currentNewsItem.kids) {
            for (let i = 0; i < currentNewsItem.kids.length; i++) {
                getCommentsTC(currentNewsItem.kids[i])
            }
        }
    }, [getCommentsTC, currentNewsItem.kids])

    return (
        <div className='newsItem__comments wh100 flexColumn'>
            <h3 className='newsItem__comments-title'>Comments</h3>
            {comments ? comments.sort((a, b) => (a && b) ? b.time - a.time : null).map(comment => {

                return <Comment comment={comment} getCommentsTC={getCommentsTC} />

            }) : null}
        </div>
    );
};

export default Comments;