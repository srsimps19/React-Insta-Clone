import React from 'react';
import './CommentSection.scss';

function CommentSection(props) {
    return(
        <>
            {props.posts.map(posts => (
                <div key={posts.comments} className="comments">
                    {posts.comments.map((e,i) => <p key={i}><h4>{e.username}</h4><p>{e.text}</p></p>)}
                </div>
            ))}
        </>
    )
}

export default CommentSection;