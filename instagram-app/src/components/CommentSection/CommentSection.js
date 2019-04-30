import React from 'react';
import './CommentSection.scss';

function CommentSection(props) {
    return(
        <>
            {props.comments.map((e,i) => 
                <div key={i} className="comments">
                    <h4>{e.username}</h4>
                    <p>{e.text}</p>
                </div>
            )}
        </>
    )
}

export default CommentSection;