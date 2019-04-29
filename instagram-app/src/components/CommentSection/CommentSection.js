import React from 'react';
import dummyData from './dummyData';

function CommentSection(props) {
    return(
        <>
            {props.posts.map(posts => (
                <div key={posts.comments} className="comments">
                {posts.comments && posts.comments.map((e,i) => <p key={i}>{e.username}{e.text}</p>)}
                </div>
            ))}
        </>
    )
}

export default CommentSection;