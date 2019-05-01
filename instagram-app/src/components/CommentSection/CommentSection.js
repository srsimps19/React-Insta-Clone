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
                <form onSubmit={(e) => props.addNewComment(e,props.postIndex)}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onChange={props.handleChanges}
                    />
                    <input type="hidden" name="postIndex" value={props.postIndex} />
                    <button>Post</button>
                </form>
            </div>
        </>
    )
}

export default CommentSection;