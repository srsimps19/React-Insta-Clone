import React from 'react';
import './PostContainer.scss';

const PostHeader = props => {
  return (
    <div className="postHeader">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          src={props.thumbnailUrl}
        />
      </div>
      <h4>{props.username}</h4>
    </div>
  );
};

export default PostHeader;