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
             <div className="addComment">
                <form onSubmit={props.addNewComment}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onChange={props.handleChanges}
                    />
                </form>
            </div>
        </>
    )
}

export default CommentSection;