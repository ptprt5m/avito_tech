import React from 'react';
import Comment from "./Comment";
import refreshIcon from "../../img/refresh.png";

const Comments = ({currentNewsItem, updateComments}) => {

    return (
        <div className='newsItem__comments wh100 flexColumn'>
            <div className='newsItem__comments-titleBlock flex'>
                <h3 className='newsItem__comments-title'>Comments</h3>
                <span onClick={updateComments}>
                    <img src={refreshIcon} alt="refresh"/>
                </span>
            </div>
            {currentNewsItem.kids ? currentNewsItem.kids.map(comment => {

                return <Comment key={comment} commentId={comment}/>

            }) : null}
        </div>
    );
};

export default Comments;