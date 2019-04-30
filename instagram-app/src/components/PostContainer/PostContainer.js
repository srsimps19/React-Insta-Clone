import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss'

function PostContainer(props) {
    return(
        <>
            {props.posts.map((post,i) => (
                <div key={i} className="posts">
                    <div className="postHeader">
                        <img src={post.thumbnailUrl} alt={post.username} className="thumbnail"/>
                        <h4>{post.username}</h4>
                    </div>
                    <img src={post.imageUrl} alt="post" className="postImage" />
                    <div className="belowPicture">
                        <i className="far fa-heart fa-lg"></i>
                        <i className="far fa-comment fa-lg"></i>
                        <h4>{post.likes} likes</h4>
                    </div>
                    <CommentSection comments={post.comments} handleChanges={props.handleChanges} addNewComment={props.addNewComment}/>
                    <div className="timestamp">
                        {post.timestamp}
                    </div>
                </div>
            ))}
        </>
    );
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default PostContainer;