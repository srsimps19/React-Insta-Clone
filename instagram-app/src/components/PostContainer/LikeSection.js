import React from 'react';
import Heading4 from '../Styles/H4';
import styled from 'styled-components';

export const LikesH4 = styled(Heading4)`
  margin-left: 10px;`;

const LikeSection = props => {
  return [
    <div
      className="belowPicture"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
        <i className="far fa-heart fa-lg" />
        <i className="far fa-comment fa-lg" />
        <LikesH4>{props.likes} likes</LikesH4>
    </div>
  ];
};

export default LikeSection;