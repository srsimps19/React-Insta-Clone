import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';
import Heading4 from '../Styles/H4';
import styled from 'styled-components';

export const CommentH4 = styled(Heading4)`
  padding-right: 10px;
  padding-top: 2px;
  margin-left: 10px;`;

const Comment = props => {
  return (
    <div className="comments">
      <CommentH4>{props.comment.username}</CommentH4>
      <p>{props.comment.text}</p>{' '}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
