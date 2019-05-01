import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import './PostContainer.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
          <img
            alt="post"
            className="postImage"
            src={this.props.post.imageUrl}
          />
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
        <div className="timestamp">
        {this.props.post.timestamp}
        </div>
      </>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;