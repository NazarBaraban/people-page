import React from 'react';
import './CommentList.css';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p className="email">Email: {comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
