import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss'

function PostContainer(props) {
    return(
        <>
            {props.posts.map(posts => (
                <div key={posts.id} className="posts">
                    <div className="postHeader">
                        <img src={posts.thumbnailUrl} alt={posts.username} className="thumbnail"/>
                        <h4>{posts.username}</h4>
                    </div>
                    <img src={posts.imageUrl} alt="post" />
                    <div className="belowPicture">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                        <h4>{posts.likes} likes</h4>
                    </div>
                    <CommentSection posts={props.posts} />
                    <div className="timestamp">
                        {posts.timestamp}
                    </div>
                    <div className="addComment">
                        <input
                            type="text"
                            placeholder="Add a comment..."
                        />
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