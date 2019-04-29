import React from 'react';
import CommentsSection from './components/CommentsSection/CommentsSection';
import PropTypes from 'prop-types';

function PostContainer(props) {
    return(
        <>
            {props.posts.map(posts => (
                <div key={posts.id} className="posts">
                    <div className="postHeader">
                        <img src={posts.thumbnailUrl} alt={posts.username} />
                        <h3>{posts.username}</h3>
                    </div>
                    <img src={posts.imageUrl} />
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    {posts.likes}
                    <CommentsSection />
                    {posts.timestamp}
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
    )
}

export default PostContainer;