import React from 'react';
import './PostContainer.scss';
import Heading4 from '../Styles/H4';
import styled from 'styled-components';

export const HeadingH4 = styled(Heading4)`
    padding-top: 25px`;

const PostHeader = props => {
  return (
    <div className="postHeader">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          src={props.thumbnailUrl}
        />
      </div>
      <HeadingH4 primary>{props.username}</HeadingH4>
    </div>
  );
};

export default PostHeader;