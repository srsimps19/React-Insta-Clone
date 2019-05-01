import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const Comment = props => {
  return (
    <div className="comments">
      <h4>{props.comment.username}</h4>
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
