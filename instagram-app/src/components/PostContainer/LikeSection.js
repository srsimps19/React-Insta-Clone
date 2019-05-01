import React from 'react';

const LikeSection = props => {
  return [
    <div
      className="belowPicture"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
        <i className="far fa-heart fa-lg" />
        <i className="far fa-comment fa-lg" />
        <h4>{props.likes} likes</h4>
    </div>
  ];
};

export default LikeSection;