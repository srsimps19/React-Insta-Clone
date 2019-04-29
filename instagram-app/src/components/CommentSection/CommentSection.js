import React from 'react';

function CommentSection(props) {
    return(
        <>
            {props.posts.map(posts => (
                <div key={posts.comments} className="comments">
                    {posts.comments && posts.comments.map((e,i) => <p key={i}><h4>{e.username}</h4>{e.text}</p>)}
                </div>
            ))}
        </>
    )
}

export default CommentSection;